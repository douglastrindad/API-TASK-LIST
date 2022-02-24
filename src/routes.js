const { Router } = require('express');

const authMiddleware = require('./app/middlewares/auth');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const TaskController = require('./app/controllers/TaskController');

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

routes.post('/sessions', SessionController.store);

routes.post('/tasks', authMiddleware, TaskController.store);
routes.get('/tasks', authMiddleware, TaskController.index);
routes.put('/tasks/:task_id', authMiddleware, TaskController.update);
routes.delete('/tasks/:task_id', authMiddleware, TaskController.delete);


module.exports = routes;