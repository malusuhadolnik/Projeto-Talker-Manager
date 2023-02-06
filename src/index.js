const express = require('express');
// const fs = require('fs/promises');

const talkersListRouter = require('./routes/talkersListRoutes');

const app = express();
app.use(express.json());

app.use(talkersListRouter);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// const readMyJSON = async () => {
//   const myJSON = await fs.readFile('src/talker.json', 'utf8');
//   return JSON.parse(myJSON);
// };

// app.get('/talker', async (_req, res) => {
//   const talkersList = await readMyJSON();

//   if (talkersList.lenght === 0) {
//     return res.status(HTTP_OK_STATUS).json([]);
//   } 
//   res.status(HTTP_OK_STATUS).send(talkersList);
// });

// app.get('/talker/:id', async (req, res) => {
//   const targetID = Number(req.params.id);
//   const talkersList = await readMyJSON();
//   const getByID = talkersList.find((talker) => talker.id === targetID);
//   if (!getByID){
//     return  res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
//   }
//   res.status(HTTP_OK_STATUS).send(getByID);
// });

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
