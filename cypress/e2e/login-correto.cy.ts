import dadosParaTeste from "../fixtures/dadosParaTeste.json";
describe("Página de login", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Deve autenticar o usuário com sucesso após preencher o formulário de login corretamente", () => {
		const { email, senha } = dadosParaTeste;

		cy.contains("a", "Login").click();
		cy.login(email, senha);
		cy.get(".success-message")
			.should("be.visible")
			.and("contain", "Login bem-sucedido! Redirecionando...");
	});
});
