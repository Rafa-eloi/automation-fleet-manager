import { Given } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../../pages/loginPage"

// Passo genérico para logar
Given("que o usuário esteja logado como {string} com senha {string}", (email, senha) => {
  LoginPage.loginComSucesso(email, senha)
})
