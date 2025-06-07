import app from './app.js';
import envConfig from './app/configs/env.config.js';

const PORT = envConfig.SERVER_PORT;
const BASE_URL = envConfig.API_BASE_URL;

app.listen(PORT, () => (
  console.log(`[SV] Running as: http://localhost:${PORT}${BASE_URL}`)
));
