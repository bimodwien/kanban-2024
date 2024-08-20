import { TodoController } from '@/controllers/todo.controller';
import { Router } from 'express';

export class TodoRouter {
  private router: Router;
  private todoController: TodoController;

  constructor() {
    this.todoController = new TodoController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.todoController.getAll);
    this.router.get('/user/:id', this.todoController.getByUser);
    this.router.get('/:id', this.todoController.getById);
    this.router.post('/', this.todoController.create);
    this.router.put('/:id', this.todoController.edit);
    this.router.patch('/:id', this.todoController.updateStatus);
    this.router.delete('/:id', this.todoController.delete);
  }

  getRouter(): Router {
    return this.router;
  }
}
