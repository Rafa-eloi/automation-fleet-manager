const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

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
  pageLoadTimeout: 60000       // 60s para carregamento da página
});
