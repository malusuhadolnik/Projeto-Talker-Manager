const HTTP_BADREQUEST_STATUS = 400;

const validadeTalkerName = (req, res, next) => {
  const { name, age } = req.body;
  const nameValue = Object.values(name);
  const ageValue = Object.values(age);

  if (!name) {
    return res.status(HTTP_BADREQUEST_STATUS).json({ message: 'O campo "name" é obrigatório' })
  }
  if (nameValue.length < 3) {
    return res.status(HTTP_BADREQUEST_STATUS).json({ message: 'O "name" deve ter pelo menos 3 caracteres' })
  }
  return next();
};

module.exports = validadeTalkerName;