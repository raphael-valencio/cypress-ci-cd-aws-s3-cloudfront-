# CI/CD - Cypress AWS S3 CloudFront

Projeto React com pipeline de testes automatizados Cypress integrado ao AWS S3 e CloudFront.

## 🚀 Tecnologias

- **React** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Cypress** - Framework de testes end-to-end
- **tsx** - Runtime TypeScript para execução rápida
- **AWS S3** - Armazenamento de artefatos
- **AWS CloudFront** - Distribuição de conteúdo

## 📄 Scripts Disponíveis

### `npm start`

Inicia o aplicativo em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) no navegador.

### `npm test`

Executa o runner de testes em modo interativo.

### `npm run build`

Gera o build de produção na pasta `build`.

### `npm run eject`

**Nota: operação irreversível. Após `eject`, não é possível voltar!**

### `npm run test:gerarDados`

Gera dados de teste para o Cypress usando tsx.

### `npm run test:cypress`

Executa o Cypress em modo headless após gerar os dados de teste.

## 🧩 Testes E2E com Cypress

O projeto utiliza Cypress para testes end-to-end automatizados.

### Estrutura de Fixtures

- `cypress/fixtures/dadosParaTeste.json` - Dados de usuário para testes

### Execução

```bash
# Gera dados de teste
npm run test:gerarDados

# Executa Cypress headless
npm run test:cypress
```

## ☁️ Deploy AWS

### Pipeline CI/CD

1. Build da aplicação React
2. Upload para AWS S3
3. Invalidação CloudFront
4. Execução de testes Cypress

### Configuração

- **Bucket S3**: Configurado para hospedar build estático
- **CloudFront**: Distribuição configurada para cache e performance
- **Cypress**: Integrado ao pipeline para validação contínua

## 🔧 Dependências de Desenvolvimento

- `cypress` - Framework de testes E2E
- `tsx` - Runtime TypeScript (substitui ts-node)
- `mochawesome` - Reporter para resultados de teste
- `typescript` - Tipagem estática
