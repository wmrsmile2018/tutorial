import { TodosBl } from '../Todos/TodosBl';
import { TodoDetailBl } from '../TodoDetail';
import { CreateTodo } from '../CreateTodo';

export const ROUTING_CONSTANTS = [
  {
    name: 'todos',
    path: '/todos',
    component: TodosBl,
  },
  {
    name: 'todo',
    path: '/todos/:id',
    component: TodoDetailBl,
  },
  {
    name: 'create-todo',
    path: '/create-todo',
    component: CreateTodo,
  },
];

export const NAVIGATION_CONSTANTS = [
  {
    name: 'todos',
    path: '/home/todos',
  },
  {
    name: 'new todo',
    path: '/home/create-todo',
  },
];
