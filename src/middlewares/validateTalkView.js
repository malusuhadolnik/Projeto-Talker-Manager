const dateRegex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/; 
// Bibliografia: https://stackoverflow.com/questions/10194464/javascript-dd-mm-yyyy-date-check

const validateTalkView = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;
  const isDateValid = dateRegex.test(watchedAt);
  
  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!isDateValid) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  return next();
};

module.exports = validateTalkView;