import { Router } from 'express';

import ChatController from '../app/controllers/ChatController';

const routes = Router();

// Cria chat / insert
routes.post('/chats', ChatController.store);

export default routes;
