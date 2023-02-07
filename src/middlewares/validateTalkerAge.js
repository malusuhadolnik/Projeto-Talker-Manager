const BADREQ = 400;

const validateTalkerAge = (req, res, next) => {
  const { age } = req.body;
  const ageValue = Object.values(age);

  if (!age) {
    return res.status(BADREQ).json({ message: 'O campo "age" é obrigatório' });
  }
  if (typeof ageValue !== 'number') {
    return res.status(BADREQ).json({ message: 'O campo "age" deve ser do tipo "number"' });
  }
  if (!Number.isInteger(ageValue)) {
    return res.status(BADREQ).json({ message: 'O campo "age" deve ser "number" do tipo inteiro' });
  }
  if (ageValue < 18) {
    return res.status(BADREQ).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  return next();
};

module.exports = validateTalkerAge;