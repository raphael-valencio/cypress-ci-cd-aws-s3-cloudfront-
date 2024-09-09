const { faker } = require("@faker-js/faker/locale/pt_BR");
import dadosParaTeste from "../fixtures/dadosParaTeste.json";

describe("Pagina de cadastro de usuário", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.contains("a", "Cadastrar Usuário").click();
	});

	it("Deve exibir mensagem de erro ao tentar cadastrar um usuário com dados já existentes", () => {
		const { nome, email, senha } = dadosParaTeste;
		cy.cadastrarUsuario(nome, email, senha);
		cy.get('[data-test="error-message"]')
			.should("be.visible")
			.and("contain", "Erro ao registrar o usuário. Tente novamente.");
		cy.contains("a", "Fechar Cadastro").click();
	});

	it("Deve falhar ao cadastrar usuário sem e-mail e exibir mensagem de erro", () => {
		const nome = faker.person.fullName();
		const senha = faker.internet.password();

		cy.get('[data-test="input-cadastroNome"]').type(nome);
		cy.get('[data-test="input-cadastroEmail"]').then(($input) => {
			cy.wrap($input).focus().blur();
			cy.wrap($input).then(($el) => {
				expect($el[0].validationMessage).to.not.be.empty;
			});
		});
		cy.get('[data-test="input-cadastroSenha"]').type(senha);
		cy.get('[data-test="submit-button"]').click();
	})
});
