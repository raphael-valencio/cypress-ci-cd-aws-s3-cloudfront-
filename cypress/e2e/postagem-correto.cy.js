const { faker } = require("@faker-js/faker/locale/pt_BR");
import dadosParaTeste from "../fixtures/dadosParaTeste.json";

describe("Pagina de Postagem", () => {
	before(() => {
		cy.session("userLogin", () => {
			const { email, senha } = dadosParaTeste;
			cy.visit("/login");
			cy.login(email, senha);
			cy.get(".success-message")
				.should("be.visible")
				.and("contain", "Login bem-sucedido! Redirecionando...");
		});

		cy.visit("/");
	});

	it("Deve criar uma nova postagem com título e conteúdo dentro do limite de caracteres", () => {
		const maxCaracteresTitulo = 30;
		const maxCaracteresConteudo = 144;
		const titulo = faker.lorem.sentence().substring(0, maxCaracteresTitulo);
		const conteudo = faker.lorem
			.paragraphs(3)
			.substring(0, maxCaracteresConteudo);

		cy.contains("a", "Criar Postagem").click();
		cy.cadastrarPostagem(titulo, conteudo);

		cy.get('[data-test="postagemMensagemDeSucesso"]', { timeout: 20000 })
			.should("be.visible")
			.and("contain", "Postagem criada com sucesso!");
	});
});
