const BADREQ = 400;

const validateTalkerAge = (req, res, next) => {
  const { age } = req.body;
  const isInteger = Number.isInteger(age);

  if (!age) {
    return res.status(BADREQ).json({ message: 'O campo "age" é obrigatório' });
  }
  if (typeof age !== 'number') {
    return res.status(BADREQ).json({ message: 'O campo "age" deve ser do tipo "number"' });
  }
  if (isInteger === false) {
    return res.status(BADREQ).json({ message: 'O campo "age" deve ser um "number" do tipo inteiro' });
  }
  if (age < 18) {
    return res.status(BADREQ).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  return next();
};

module.exports = validateTalkerAge;