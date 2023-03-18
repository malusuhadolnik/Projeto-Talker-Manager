# Projeto Talker Manager

# Sobre
Este projeto foi desenvolvido durante o Módulo 3 - Back-End do curso de Desenvolvimento Web da Trybe.

Os arquivos desenvolvidos por mim estão na pasta src. Os demais foram desenvolvidos pelo time da Trybe.

## Descrição dos endpoints:


## Tecnologias usadas

> Back-End
Docker, docker-compose, SQL, Node.js

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

 - É necessário ter o node (versão 16 ou superior) instalado em sua máquina.
 
 1. Clone este repositório em su máquina, e em seguida instale as dependências:
 ```bash
npm install
``` 
 
