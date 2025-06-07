import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from './routes.js';
import errorMiddleware from './app/middlewares/error.middleware.js';
import envConfig from './app/configs/env.config.js';

class App {
  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.setRoutes();
  };

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors({
      origin: envConfig.FRONTEND_URL,
      credentials: true
    }));
    this.app.use(cookieParser());
  }

  setRoutes() {
    this.app.use(routes);
  }

  addErrorMiddlewares() {
    this.app.use(errorMiddleware);
  }
}

export default new App().app;