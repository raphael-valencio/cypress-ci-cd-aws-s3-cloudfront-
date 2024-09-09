const { faker } = require('@faker-js/faker');

const gerarDadosParaTeste = () => {
  return {
    nome: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    senha: faker.internet.password(),
  };
};

const fs = require('node:fs');
const path = require('node:path');

const dados = gerarDadosParaTeste();
fs.writeFileSync(
  path.resolve(__dirname, 'cypress/fixtures/dadosParaTeste.json'),
  JSON.stringify(dados, null, 2)
);
console.log('Dados de teste gerados e salvos em cypress/fixtures/dadosParaTeste.json');
