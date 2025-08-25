import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../pages/homePage"

When("informar a placa {string}", (placa) => {
    HomePage.preencherPlaca(placa);
});

Then('deve visualizar apenas o veículo {string}', (veiculo) => {
    HomePage.resultadoBusca(veiculo);
});

When("informar o modelo {string}", (modelo) => {
    HomePage.preencherModelo(modelo);
});

When("pesquisar pelo veículo {string}", (termo) => {
  HomePage.pesquisarVeiculo(termo);
});

Then("o grid de veículos deve estar vazio", () => {
  HomePage.validarGridVazio();
});