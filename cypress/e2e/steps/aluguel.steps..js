import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import AluguelPage from "../../pages/aluguelPage"

When("selecionar o primeiro veículo disponível na listagem", () => {
  AluguelPage.selecionarPrimeiroVeiculoDisponivel()
});

When("confirmar o aluguel", () => {
  AluguelPage.confirmarAluguel()
});

When("escolher o método de pagamento {string}", (metodo) => {
  AluguelPage.escolherMetodoPagamento(metodo)
});

When("confirmar o pagamento", () => {
  AluguelPage.confirmarPagamento()
});

Then("o sistema deve registrar o aluguel com sucesso", () => {
  AluguelPage.validarAluguelComSucesso()
});

When("aplicar o cupom {string}", (codigo) => {
  AluguelPage.aplicarCupom(codigo)
});

Then("o valor total deve ser reduzido em R$ {int},00", (valor) => {
  AluguelPage.validarDesconto(valor)
});

Then("deve visualizar a mensagem de erro de cupom inválido {string}", (mensagem) => {
  AluguelPage.validarMensagemErro(mensagem)
});

When("alterar a quantidade de dias para um valor aleatório entre 2 e 7", () => {
  AluguelPage.alterarDiasAleatorios();
});

Then("o valor total deve ser igual à diária multiplicada pela quantidade de dias", () => {
  AluguelPage.validarValorTotalMultiplicado();
});

When("capturar o resumo do primeiro modal", () => {
  AluguelPage.capturarResumoPrimeiroModal();
});

Then("as informações devem estar corretas no resumo do segundo modal", () => {
  AluguelPage.validarResumoSegundoModal();
});