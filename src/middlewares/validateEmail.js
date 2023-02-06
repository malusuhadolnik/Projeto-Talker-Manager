const regex2 = /\S+@\S+\.\S+/;

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const isFormatValid = regex2.test(email);

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  } 
  if (!isFormatValid) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  return next();
};

module.exports = validateEmail;