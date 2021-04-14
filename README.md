<h1 align="center">
    <img alt="GoBarber" title="GoBarber" src=".github/logo.svg" width="300px" />
</h1>

<p align="center">
  <a href="#computer-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-como-configurar-e-executar">Como configurar e executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br/>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Diziano/gobarber-api?style=flat-square">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Diziano/gobarber-api?style=flat-square">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Diziano/gobarber-api?style=flat-square">

  <a href="https://github.com/Diziano/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Diziano/gobarber-api?style=flat-square">
  </a>

  <a href="https://github.com/Diziano/gobarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Diziano/gobarber-api?style=flat-square">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/Diziano/gobarber-api?style=flat-square">
</p>

<br/>

## :computer: Projeto
O GoBarber é um aplicativo de agendamento para barbearias.
Os clientes podem visualizar os horários disponíveis e agendar serviços com seu profissional favorito através do aplicativo.
O profissional, através do site pode visualizar todos os seus próximos agendamentos e horários livres.

Este é um projeto de próposito didático que foi desenvolvido durante o Bootcamp GoStack da [Rocketseat](https://rocketseat.com.br/). Este repositório contempla somente a camada de Back-end da aplicação, uma API Rest. Confira a aplicação Web e Mobile nos links abaixo:
- [GoBarber Web](https://github.com/Diziano/gobarber-web/)
- [GoBarber Mobile](https://github.com/Diziano/gobarber-mobile/)

<br/>

## :rocket: Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Express](https://github.com/expressjs/express)
- [TypeORM](https://github.com/typeorm/typeorm)
- [PostgreSQL](https://github.com/postgres/postgres)
- [Redis](https://github.com/redis/redis)
- [MongoDB](https://github.com/mongodb/mongo)
- [celebrate](https://github.com/arb/celebrate)
- [Jest](https://github.com/facebook/jest)
- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

<br/>

## :thinking: Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

<br/>

## :gear: Como configurar e executar

```bash

    # Clonar o repositório
    $ git clone https://github.com/diziano/gobarber-api.git

    # Navegar para o diretório
    $ cd gobarber

    # Instalar as dependências
    $ yarn 
```

- Renomeie o arquivo de configuração do TypeOrm: `mv ormconfig.example.json ormconfig.json`. No mesmo arquivo configure as credenciais do PostgreSQL e MongoDB;

- Renomeie o arquivo de configuração do ambiente: `mv .env.example .env`. No mesmo arquivo configure todas as variáveis de ambiente;

- No arquivo [src/database/index.jsormconfig.json](src/database/index.jsormconfig.json) o nome do banco de dados dos testes (gofinances_tests);

- Para alterações do banco de dados aconselha-se utilizar a CLI do TypeORM: <code>yarn typeorm {seu comando}</code>. Confira a documentação [aqui](https://typeorm.io/).

```bash
    # Executar migrations para criação das tabelas nas base de dados
    $ yarn typeorm migration:run

    # Iniciar o projeto
    $ yarn start

    # Iniciar o projeto em desenvolvimento
    $ yarn dev:server

    # Executar testes
    $ yarn test
```
<br/>

## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
