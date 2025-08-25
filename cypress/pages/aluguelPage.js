import { aluguelElements } from "../elements/aluguelElements"

class AluguelPage {
  selecionarPrimeiroVeiculoDisponivel() {
    cy.get(aluguelElements.btnAlugarPrimeiroDisponivel).first().click();
  }

  confirmarAluguel() {
    cy.get(aluguelElements.modalConfirmarAluguel).click();
  }

  escolherMetodoPagamento(metodo) {
    if (metodo.toLowerCase() === "cartão") {
      cy.get(aluguelElements.modalMetodoCartao).click();
    } else if (metodo.toLowerCase() === "pix") {
      cy.get(aluguelElements.modalMetodoPix).click();
    }
  }

  confirmarPagamento() {
    cy.get(aluguelElements.modalConfirmarPagamento).click();
  }

  validarAluguelComSucesso() {
    cy.get(aluguelElements.toastSucesso).should("contain.text", "O pagamento foi processado com sucesso.");
  }

  aplicarCupom(codigo) {
    cy.get(aluguelElements.inputCupom).clear().type(codigo);
    cy.get(aluguelElements.btnAplicarCupom).click();
    cy.wait(1000);
  }

  validarDesconto(valorDesconto) {
    cy.get(aluguelElements.valorTotal).invoke("text").then((texto) => {
      const valor = parseFloat(texto.replace("R$", "").replace(".", "").replace(",", ".").trim());
      expect(valor).to.be.lessThan(valor + valorDesconto); // valida que aplicou desconto
    });
  }

  validarMensagemErro(mensagem) {
    cy.get(aluguelElements.alertaErro).should("contain.text", mensagem);
  }

  alterarDiasAleatorios() {
    const dias = Cypress._.random(2, 7);
    cy.wrap(dias).as("qtdDias");
    cy.get(aluguelElements.inputDias).type(dias);
  }

  validarValorTotalMultiplicado() {
    cy.get("@qtdDias").then((dias) => {
      // pega valor da diária
      cy.get(aluguelElements.diaria).last().invoke("text").then((valorDiariaText) => {
        const diaria = Number(valorDiariaText.replace(/[^\d]/g, ""));
        const esperado = diaria * dias;

        // valida valor total exibido
        cy.get(aluguelElements.valorTotal).invoke("text").then((valorTotalText) => {
          const total = Number(valorTotalText.replace(/[^\d]/g, ""));
          expect(total).to.eq(esperado);
        });

        cy.get(aluguelElements.detalheTotal)
          .should("contain.text", `${dias} dia`)
          .and("contain.text", `R$ ${diaria}`);
      });
    });
  }

  // Capturar dados do primeiro modal
  capturarResumoPrimeiroModal() {
    const resumo = {};

    cy.get(aluguelElements.resumoVeiculoModal1)
      .eq(0)
      .invoke("text")
      .then((text) => (resumo.veiculo = text.trim()));

    cy.get(aluguelElements.resumoVeiculoModal1)
      .eq(1)
      .invoke("text")
      .then((text) => (resumo.placa = text.trim()));

    cy.get(aluguelElements.resumoValorTotalModal1)
      .invoke("text")
      .then((text) => (resumo.valorTotal = text.trim()));

    cy.get("@qtdDias").then((dias) => {
      resumo.qtdDias = dias;
      cy.wrap(resumo).as("resumoPrimeiroModal");
    });
  }

  // Validar dados no segundo modal
  validarResumoSegundoModal() {
    cy.get("@resumoPrimeiroModal").then((resumo) => {
      // Veículo (Nome + Placa)
      cy.get(aluguelElements.resumoVeiculoModal2)
        .eq(0)
        .invoke("text")
        .should("match", /\w+ \(\w+\)/);

      // Dias
      cy.get(aluguelElements.resumoVeiculoModal2)
        .eq(1)
        .invoke("text")
        .should("contain", resumo.qtdDias);

      // Valor Total
      cy.get(aluguelElements.resumoValorTotalModal2)
        .invoke("text")
        .should("contain", resumo.valorTotal);
    });
  }




}

export default new AluguelPage()
