# Projeto Talker Manager

# Sobre
Este projeto foi desenvolvido durante o Módulo 3 - Back-End do curso de Desenvolvimento Web da Trybe.

Nele, foi construída uma API para cadastro de palestrantes em um evento. Ela permite cadastrar, exibir e deletar palestrantes, bem como atualizar seus dados através de operações CRUD nas rotas ```/talker``` e ```/login```, utilizando o módulo ```fs```. Algumas dos endpoints requerem validação de dados para que a requisição tenha sucesso.

Os arquivos desenvolvidos por mim estão na pasta src. Os demais foram desenvolvidos pelo time da Trybe.

## Descrição dos endpoints:
<table>
  <thead>
    <tr>
      <th>Método HTTP</th>
      <th>Endpoint</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/talker</td>
      <td>Deve listar todas as pessoas palestrantes</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/talker/:id</td>
      <td>Deve listar o usuário que corresponde à ID requisitada</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/login</td>
      <td>Deve retornar um token aleatório</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/talker</td>
      <td>Deve adicionar uma nova pessoa palestrante ao banco de dados, e retornar os dados inseridos juntamente com uma id única.</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/talker/:id</td>
      <td>Deve ser capaz de editar uma pessoa palestrante com base no id da rota, e retornar seusdados.</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/talker/:id</td>
      <td>Deve ser capaz de deletar uma pessoa palestrante com base no id da rota.</td>
    </tr>
  </tbody>
</table>

## Tecnologias usadas

> Back-End
Node.js

## Instalando Dependências

### Usando o Docker

1. Clone este repositório em su máquina, e em seguida suba o container:
```bash
docker-compose up -d
``` 
- Será inicializado o container talker_manager.

2. Dentro do diretório do projeto, execute o conteiner:
```bash
docker exec -it talker_manager bash
``` 
- As credencias de acesso ao banco de dados estão definidas no arquivo docker-compose.yml.

3. Agora instale as dependências dentro do container:
```bash
npm install
``` 
### Rodando localmente

 - É necessário ter o ```node``` (versão 16 ou superior) instalado em sua máquina.
 
 1. Clone este repositório em su máquina, e em seguida instale as dependências:
 ```bash
npm install
``` 
 
