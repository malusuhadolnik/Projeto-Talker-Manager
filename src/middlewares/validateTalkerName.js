const BADREQUEST = 400;

const validadeTalkerName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(BADREQUEST).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(BADREQUEST).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  return next();
};

module.exports = validadeTalkerName;