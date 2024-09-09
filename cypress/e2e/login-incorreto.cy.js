const { faker } = require("@faker-js/faker/locale/pt_BR");
import dadosParaTeste from "../fixtures/dadosParaTeste.json";

describe("Página de login", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.contains("a", "Login").click();
	});

	it("Deve exibir uma mensagem de erro ao tentar logar com um email inválido", () => {
		const senha = faker.internet.password();
		const email = faker.internet.email().replace("@", "");

		cy.get('[data-test="input-loginEmail"]').then(($input) => {
			$input[0].setCustomValidity("Email inválido");
			cy.wrap($input).type(email);
			cy.wrap($input).then(($el) => {
				expect($el[0].validationMessage).to.eq("Email inválido");
			});
		});
		cy.get('[data-test="input-loginSenha"]').type(senha);
		cy.get('[data-test="submit-button"]').click();
	});

	it("Deve exibir uma mensagem de erro ao tentar logar com uma senha inválida", () => {
		const senha = faker.internet.password({ length: 5 });
		const { email } = dadosParaTeste;

		cy.login(email, senha);
		cy.get(".error-message")
			.should("be.visible")
			.and("contain", "User not authorized");
	});
});
