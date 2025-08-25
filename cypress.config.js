const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

async function setupNodeEvents(on, config) {
  // Plugin Cucumber
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Preprocessador com esbuild
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Plugin Mochawesome
  mochawesome(on);

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://qe-test.recrutamento.avantsoft.com.br/login",
    setupNodeEvents,
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 10000, // 10s para comandos como cy.get
  pageLoadTimeout: 60000,       // 60s para carregamento da página

  // Configuração do Mochawesome
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
});
