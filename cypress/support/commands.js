Cypress.Commands.add("login", (email, senha) => {
	email ? cy.get('[data-test="input-loginEmail"]').type(email) : null;
	senha ? cy.get('[data-test="input-loginSenha"]').type(senha) : null;
	cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add("cadastrarUsuario", (nome, email, senha) => {
	nome ? cy.get('[data-test="input-cadastroNome"]').type(nome) : null;
	email ? cy.get('[data-test="input-cadastroEmail"]').type(email) : null;
	senha ? cy.get('[data-test="input-cadastroSenha"]').type(senha) : null;
	cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add("cadastrarPostagem", (titulo, conteudo) => {
	titulo ? cy.get('[data-test="input-postagemTitulo"]').type(titulo) : null;
	conteudo ? cy.get('[data-test="input-postagemConteudo"]').type(conteudo) : null;
	cy.get('[data-test="button-submit"]').click();
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
