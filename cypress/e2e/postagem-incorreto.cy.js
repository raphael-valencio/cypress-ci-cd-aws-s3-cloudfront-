const { faker } = require("@faker-js/faker/locale/pt_BR");
import dadosParaTeste from "../fixtures/dadosParaTeste.json";

describe("Pagina de Postagem", () => {
	beforeEach(() => {
		cy.session("userLogin", () => {
			const { email, senha } = dadosParaTeste;

			cy.visit("/login");

			cy.login(email, senha);
			cy.get(".success-message")
				.should("be.visible")
				.and("contain", "Login bem-sucedido! Redirecionando...");
		});

		cy.visit("/");
		cy.contains("a", "Criar Postagem").click();
	});

	it("Deve exibir mensagem de erro ao tentar criar postagem com conteúdo acima de 144 caracteres", () => {
		const maximoCaracteresTitulo = 30;
		const titulo = faker.lorem.sentence().substring(0, maximoCaracteresTitulo);
		const conteudo = faker.lorem.paragraphs(3);

		cy.cadastrarPostagem(titulo, conteudo);
		cy.get('[data-test="postagemMensagemDeErro"]', { timeout: 2000 })
			.should("be.visible")
			.and("contain", "Erro ao criar postagem.");
	});

	it("Deve exibir mensagem de erro ao tentar criar postagem com titulo acima de 30 caracteres", () => {
		const maximoCaracteresConteudo = 144;
		const titulo = faker.lorem.paragraph();
		const conteudo = faker.lorem
			.paragraphs(3)
			.substring(0, maximoCaracteresConteudo);

		cy.cadastrarPostagem(titulo, conteudo);
		cy.get('[data-test="postagemMensagemDeErro"]', { timeout: 2000 })
			.should("be.visible")
			.and("contain", "Erro ao criar postagem.");
	});
});
