'use strict';

import TodoService from '@/service/todo.service';
import { Request, Response, NextFunction } from 'express';

export class TodoController {
  async getAll(req: Request, res: Response, next: NextFunction) {}

  async getById(req: Request, res: Response, next: NextFunction) {}

  async getByUser(req: Request, res: Response, next: NextFunction) {}

  async create(req: Request, res: Response, next: NextFunction) {}

  async edit(req: Request, res: Response, next: NextFunction) {}

  async updateStatus(req: Request, res: Response, next: NextFunction) {}

  async delete(req: Request, res: Response, next: NextFunction) {}
}
