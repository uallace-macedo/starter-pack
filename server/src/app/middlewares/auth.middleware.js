import jwt from 'jsonwebtoken';

import asyncHandler from '../utils/asyncHandler.util.js';
import { Unauthorized, Forbidden } from '../utils/error.util.js';
import envConfig from '../configs/env.config.js';

const JWT_SECRET = envConfig.JWT_SECRET;
const COOKIE_NAME = envConfig.COOKIE_NAME;

export const protect = asyncHandler (async (req, res, next) => {
  const token = req.cookies[COOKIE_NAME];

  if(!token) throw Unauthorized();
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if(err) throw Forbidden('Acesso negado: Token inválido ou expirado!');
    req.user = user;
    next();
  });
});

export const authorizeRoles = asyncHandler (async (...roles) => {
  return (req, res, next) => {
    if(!req.user || !roles.includes(user.role)) throw Forbidden();
    next();
  };
});