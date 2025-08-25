import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../../pages/loginPage"

const users = Cypress.env("users");

Given("que o usuário esteja na tela de login", () => {
  LoginPage.visitarLogin();
});

When("informar credenciais inválidas", () => {
  LoginPage.preencherEmail(users.invalid.email);
  LoginPage.preencherSenha(users.invalid.password);
  LoginPage.clicarLogin();
});

Then("deve visualizar a mensagem de erro {string}", (mensagem) => {
  LoginPage.validarMensagemErro(mensagem);
});

When("clicar no botão de sair", () => {
  LoginPage.clicarLogout();
});

Then ("deve ir para a tela de login", () => {
  LoginPage.validarTelaLogin();
});

When("clicar no botão de login sem preencher email e senha", () => {
  LoginPage.clicarLogin();
}); 

Then ("deve aparecer uma mensagem {string}", (mensagem) => {
  LoginPage.validarMensagemCampoVazio(mensagem);
});