import 'dotenv/config';

export default {
  SERVER_PORT: process.env.SERVER_PORT,
  API_BASE_URL: process.env.API_BASE_URL,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  COOKIE_NAME: process.env.COOKIE_NAME,

  FRONTEND_URL: process.env.FRONTEND_URL
};