const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "xx3bxu",
    baseUrl: "https://example.cypress.io",
    viewportHeight: 1000,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
