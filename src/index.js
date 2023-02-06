const express = require('express');
const fs = require('fs/promises');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const readMyJSON = async () => {
  const myJSON = await fs.readFile('src/talker.json', 'utf8');
  return JSON.parse(myJSON);
};


app.get('/talker', async (_req, res) => {
  const talkersList = await readMyJSON();

  if (talkersList.lenght === 0) {
    return res.status(HTTP_OK_STATUS).json([]);
  } else {
    res.status(HTTP_OK_STATUS).send(talkersList);
  }
  
});


// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
