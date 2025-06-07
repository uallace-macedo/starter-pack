import asyncHandler from '../../app/utils/asyncHandler.util.js';
import envConfig from '../../app/configs/env.config.js';

const COOKIE_NAME = envConfig.COOKIE_NAME;

export const login = asyncHandler (async (req, res) => {
  // DB & VALIDATION

  // JWT
  const data = {};
  const token = jwt.sign({ data }, envConfig.JWT_SECRET, { expiresIn: envConfig.JWT_EXPIRES_IN });

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: false, // https,
    maxAge: 1 * 60 * 60 * 360,
    path: '/'
  })
});