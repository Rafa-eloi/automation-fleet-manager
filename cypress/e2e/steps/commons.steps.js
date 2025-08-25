import { Given } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../../pages/loginPage"

const users = Cypress.env("users");

// Passo genérico para logar
Given("que o usuário esteja logado com credenciais válidas", () => {
  LoginPage.loginComSucesso(users.valid.email, users.valid.password)
});
