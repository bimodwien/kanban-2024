import { TodoController } from '@/controllers/todo.controller';
import { Router } from 'express';
import {
  validateToken,
  validateRefreshToken,
} from '@/middlewares/auth.middleware';

import { Request, Response } from 'express';

export class TodoRouter {
  private router: Router;
  private todoController: TodoController;

  constructor() {
    this.todoController = new TodoController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    console.log('Initializing Todo Routes');

    this.router.get('/test', validateToken, (req: Request, res: Response) => {
      res.send('Test route is working');
    });
    this.router.get('/', validateToken, this.todoController.getAll);
    this.router.post('/', validateToken, this.todoController.create);
    this.router.get('/user/:id', validateToken, this.todoController.getByUser);
    this.router.get('/:id', validateToken, this.todoController.getById);
    this.router.put('/:id', validateToken, this.todoController.edit);
    this.router.patch('/:id', validateToken, this.todoController.updateStatus);
    this.router.delete('/:id', validateToken, this.todoController.delete);
  }

  getRouter(): Router {
    return this.router;
  }
}
