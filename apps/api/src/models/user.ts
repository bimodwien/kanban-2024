import { Todo } from '@prisma/client';

export type TUser = {
  id: number;
  username: string;
  email: string;
  fullName: string;
  password?: string;
  createdAt: Date;
  Todo: Todo;
};

export type TDecode = {
  type: string;
  user: TUser;
};