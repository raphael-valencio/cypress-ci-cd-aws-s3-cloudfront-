import dadosParaTeste from "../fixtures/dadosParaTeste.json";

describe("Pagina de cadastro", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.contains("a", "Cadastrar Usuário").click();
	});
	it("Deve realizar o cadastro de um novo usuário preenchendo corretamente todos os campos do formulário", () => {
		const { nome, email, senha } = dadosParaTeste;
		cy.cadastrarUsuario(nome, email, senha);
		cy.get('[data-test="success-message"]', { timeout: 2000 })
			.should("be.visible")
			.and("contain", "Usuário registrado com sucesso!");
	});
});
