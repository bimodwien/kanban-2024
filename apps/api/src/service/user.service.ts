'use strict';
import { Request } from 'express';
import prisma from '@/prisma';
import { TUser } from '@/models/user';
import { hashPassword, comparePassword } from '@/libs/bcrypt';
import { createToken } from '@/libs/jwt';
import { Prisma } from '@prisma/client';

class UserService {
  static async register(req: Request) {
    const { username, email, fullName, password } = req.body as TUser;

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });
    if (existingUser) throw new Error('User sudah terdaftar');

    const hashed = await hashPassword(String(password));

    const data: Prisma.UserCreateInput = {
      username,
      email,
      fullName,
      password: hashed,
    };

    const newUser = await prisma.user.create({
      data,
    });

    return newUser;
  }

  static async login(req: Request) {
    const { username, password } = req.body as TUser;

    if (!password) throw new Error('password dibutuhkan');

    const user = (await prisma.user.findFirst({
      where: {
        username,
      },
      select: {
        id: true,
        username: true,
        fullName: true,
        email: true,
        password: true,
      },
    })) as TUser;

    if (!user) throw new Error('User tidak ditemukan');

    if (!user.password) throw new Error('Password tidak ditemukan');

    const checkPassword = await comparePassword(user.password, password);

    if (!checkPassword) throw new Error('Wrong Password');

    delete user.password;

    const access_token = createToken({ user, type: 'access_token' }, '10hr');
    const refresh_token = createToken({ user, type: 'refresh_token' }, '24hr');

    return { access_token, refresh_token };
  }
}

export default UserService;
