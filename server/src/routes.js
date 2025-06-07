import { Router } from 'express';

import envConfig from './app/configs/env.config.js';
import { NotFound } from './app/utils/error.util.js';

const API_BASE_URL = envConfig.API_BASE_URL || '/api/v1';
const routes = new Router();

routes.get(`${API_BASE_URL}`, (req, res) => (
  res.status(200).json({ success: true, message: 'Running!' })
));

routes.use((req, res, next) => {
  next(NotFound('Rota não encontrada!'));
});

export default routes;