import { aluguelElements } from "../elements/aluguelElements"

class AluguelPage {
  selecionarPrimeiroVeiculoDisponivel() {
    cy.get(aluguelElements.btnAlugarPrimeiroDisponivel).first().click()
  }

  confirmarAluguel() {
    cy.get(aluguelElements.modalConfirmarAluguel).click()
  }

  escolherMetodoPagamento(metodo) {
    if (metodo.toLowerCase() === "cartão") {
      cy.get(aluguelElements.modalMetodoCartao).click()
    } else if (metodo.toLowerCase() === "pix") {
      cy.get(aluguelElements.modalMetodoPix).click()
    }
  }

  confirmarPagamento() {
    cy.get(aluguelElements.modalConfirmarPagamento).click()
  }

  validarAluguelComSucesso() {
    cy.get(aluguelElements.toastSucesso).should("contain.text", "O pagamento foi processado com sucesso.")
  }
}

export default new AluguelPage()
