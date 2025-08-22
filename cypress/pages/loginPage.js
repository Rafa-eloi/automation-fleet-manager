import { loginElements } from '../elements/loginElements'

class LoginPage {
  visitarLogin() {
    cy.visit("/");
  }

  preencherEmail(email) {
    cy.get(loginElements.inputEmail).type(email);
  }

  preencherSenha(senha) {
    cy.get(loginElements.inputPassword).type(senha);
  }

  clicarLogin() {
    cy.get(loginElements.buttonLogin).click();
  }

  // Reutilizando o comando customizado
  loginComSucesso(email, senha) {
    cy.login(email, senha);
  }

  validarMensagemErro(mensagem) {
    cy.get(loginElements.alertError).should("contain.text", mensagem);
  }

  clicarLogout() {
    cy.get(loginElements.buttonLogout).click();
  }

  validarTelaLogin() {
    cy.url().should("include", "/login");
  }
}

export default new LoginPage()
