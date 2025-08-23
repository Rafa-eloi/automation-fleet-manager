import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import AluguelPage from "../../pages/aluguelPage"

When("selecionar o primeiro veículo disponível na listagem", () => {
  AluguelPage.selecionarPrimeiroVeiculoDisponivel()
})

When("confirmar o aluguel", () => {
  AluguelPage.confirmarAluguel()
})

When("escolher o método de pagamento {string}", (metodo) => {
  AluguelPage.escolherMetodoPagamento(metodo)
})

When("confirmar o pagamento", () => {
  AluguelPage.confirmarPagamento()
})

Then("o sistema deve registrar o aluguel com sucesso", () => {
  AluguelPage.validarAluguelComSucesso()
})
