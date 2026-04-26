import { faker } from '@faker-js/faker';
import * as fs from 'node:fs';
import * as path from 'node:path';

const gerarDadosParaTeste = () => {
  return {
    nome: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    senha: faker.internet.password(),
  };
};

const dados = gerarDadosParaTeste();
fs.writeFileSync(
  path.resolve(__dirname, 'cypress/fixtures/dadosParaTeste.json'),
  JSON.stringify(dados, null, 2)
);
console.log('Dados de teste gerados e salvos em cypress/fixtures/dadosParaTeste.json');
