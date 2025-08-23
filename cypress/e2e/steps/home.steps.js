import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../pages/homePage"

When("contar quantos veículos estão alugados na listagem", () => {
  // apenas disparado, a validação fica no Then
})

Then("o valor deve ser igual ao número mostrado no dashboard", () => {
  HomePage.validarQtdVeiculosAlugados()
})

When("contar quantos veículos existem na grid", () => {
  // apenas disparado, a validação fica no Then
})

Then("o valor deve ser igual ao total de veículos no dashboard", () => {
  HomePage.validarQtdTotalVeiculos()
})

Then("todos os veículos com status diferente de {string} devem estar com o botão de alugar desabilitado", (status) => {
  HomePage.validarVeiculosNaoDisponiveisNaoPodemSerAlugados()
})
