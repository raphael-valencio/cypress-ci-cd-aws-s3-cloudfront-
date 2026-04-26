declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string | undefined, senha: string | undefined): Chainable<void>
      cadastrarUsuario(nome: string | undefined, email: string | undefined, senha: string | undefined): Chainable<void>
      cadastrarPostagem(titulo: string | undefined, conteudo: string | undefined): Chainable<void>
    }
  }
}

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

export {};
