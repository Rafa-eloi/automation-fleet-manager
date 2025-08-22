import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../../pages/loginPage"

Given("que o usuário esteja na tela de login", () => {
  LoginPage.visitarLogin();
});

When("informar o email {string} e a senha {string}", (email, senha) => {
  LoginPage.preencherEmail(email);
  LoginPage.preencherSenha(senha);
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
