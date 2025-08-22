// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ***********************************************
// Aqui adicionamos comandos customizados do Cypress
// ***********************************************

import { loginElements } from '../elements/loginElements'

// Comando de login
Cypress.Commands.add("login", (email, senha) => {
  cy.visit("/");
  cy.get(loginElements.inputEmail).type(email);
  cy.get(loginElements.inputPassword).type(senha);
  cy.get(loginElements.buttonLogin).click();
  cy.get(loginElements.titleHome).contains("Fleet Manager");
})
