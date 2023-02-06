const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateFormat  = (email) => {
    const isItValid = false;
    if (email.value.match(regex)){
      isItValid = true;
    }
    return isItValid;  
};

const validateEmail =(req, res, next) => {
  const { email } = req.body;
  const isFormatValid = validateFormat(email);

  if (email.lenght === 0){
    return res.status(400).json({ message: 'O campo \"email\" é obrigatório' });
  } else if (!isFormatValid){
    return res.status(400).json({ message: 'O \"email\" deve ter o formato \"email@email.com\"' });
  }
  return next();
};

module.exports = validateEmail;