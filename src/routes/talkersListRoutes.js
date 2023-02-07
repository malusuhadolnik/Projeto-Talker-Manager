const express = require('express');
const fs = require('fs/promises');
const crypto = require('crypto');

const talkersListRouter = express.Router();
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const validateToken = require('../middlewares/validateToken');
const validadeTalkerName = require('../middlewares/validateTalkerName');
const validateTalkerAge = require('../middlewares/validateTalkerAge');
const validateTalkView = require('../middlewares/validateTalkView');
const validateTalk = require('../middlewares/validateTalk');
const validadeTalkerRate = require('../middlewares/validateTalkRate');

const HTTP_OK_STATUS = 200;

const token = () => crypto.randomBytes(8).toString('hex');

const readMyJSON = async () => {
  const myJSON = await fs.readFile('src/talker.json', 'utf8');
  return JSON.parse(myJSON);
};

const writeMyJSON = async (data) => {
    const writing = await fs.writeFile('src/talker.json', JSON.stringify(data));
    return writing;
};

talkersListRouter.get('/talker', async (_req, res) => {
  const talkersList = await readMyJSON();

  if (talkersList.lenght === 0) {
    return res.status(HTTP_OK_STATUS).json([]);
  } 
  res.status(HTTP_OK_STATUS).send(talkersList);
});

talkersListRouter.get('/talker/:id', async (req, res) => {
  const targetID = Number(req.params.id);
  const talkersList = await readMyJSON();
  const getByID = talkersList.find((talker) => talker.id === targetID);
  if (!getByID) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(HTTP_OK_STATUS).send(getByID);
});

talkersListRouter.post('/login', validatePassword, validateEmail, async (req, res) => {
  const loginInfo = req.body;
  const newLogin = { ...loginInfo };
  
  const talkersList = await readMyJSON();
  talkersList.push(newLogin);
  
  await writeMyJSON(talkersList);
  
  const theToken = token();
  return res.status(HTTP_OK_STATUS).json({ token: theToken });
});

talkersListRouter.post('/talker', 
  validateToken, 
  validadeTalkerName, 
  validateTalkerAge,
  validateTalk,
  validateTalkView,
  validadeTalkerRate,
  async (req, res) => {
  const talkersList = await readMyJSON();

  const newTalker = { id: talkersList.length, ...req.body };
  const newList = [...talkersList, newTalker];
 
  // talkersList.push(newTalker);
  await writeMyJSON(newList);
  
  res.status(201).json(newTalker);
});

// Fontes consultadas para implementação do token:
// https://www.tabnine.com/code/javascript/functions/crypto/randomBytes
// https://www.geeksforgeeks.org/node-js-crypto-randombytes-method/
// https://futurestud.io/tutorials/generate-a-random-string-in-node-js-or-javascript

module.exports = talkersListRouter;