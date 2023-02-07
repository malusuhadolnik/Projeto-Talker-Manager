const HTTP_UNAUTHORIZED_STATUS = 401;

const validateToken = (req,res,next) => {
  const { authorization } = req.headers;
  const authValue = Object.values(authorization);

  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Token não encontrado'})
  } 
  if (authValue.length !== 16 && typeof authValue !== 'string') {
    return res.status(HTTP_UNAUTHORIZED_STATUS).JASON({ message: 'Token inválido' })
  }
  return next();
};

module.exports = validateToken;