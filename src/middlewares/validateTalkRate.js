const BADREQ = 400;

const validateTalkRate = (req, res, next) => {
    const { talk } = req.body;
    const { rate } = talk;
    const rateValue = Object.values(rate);
    const rateRange = [1, 2, 3, 4, 5];
    const isRateInRange = rateRange.find((number) => number === rateValue);

  if (!rate) {
    return res.status(BADREQ).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (!Number.isInteger(rateValue) && !isRateInRange) {
    return res.status(BADREQ).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  return next();
};

module.exports = validateTalkRate;
