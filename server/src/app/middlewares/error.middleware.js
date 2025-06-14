export default async function(err, req, res, next) {
  const message = err.message || 'Erro interno no servidor!';
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message
  })
};