import HttpError from '../configs/error.config.js';

export const BadRequest = (msg = 'Requisição inválida.') => new HttpError(400, msg);
export const Unauthorized = (msg = 'Não autorizado. Faça login para continuar.') => new HttpError(401, msg);
export const Forbidden = (msg = 'Acesso negado. Você não tem permissão para realizar esta ação.') => new HttpError(403, msg);
export const NotFound = (msg = 'Recurso não encontrado.') => new HttpError(404, msg);
