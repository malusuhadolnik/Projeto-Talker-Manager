const HTTP_UNAUTHORIZED_STATUS = 401;

const validateToken = (req, res, next) => {
  const authorization = req.header('authorization');

  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Token não encontrado' });
  } 
  if (authorization.length !== 16 || typeof authorization !== 'string') {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Token inválido' });
  }
  return next();
};

module.exports = validateToken;