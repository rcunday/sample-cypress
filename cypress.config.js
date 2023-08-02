const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "xx3bxu",
    baseUrl: "https://example.cypress.io",
    viewportHeight: 1000,
    viewportWidth: 1280,
    experimentalStudio:  true,
    experimentalInteractiveRunEvents: false,
    setupNodeEvents(on) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions.args) // print all current args

        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // auto open devtools
          launchOptions.args.push('--auto-open-devtools-for-tabs')
        }

        if (browser.family === 'firefox') {
          // auto open devtools
          launchOptions.args.push('-devtools')
        }

        if (browser.name === 'electron') {
          // auto open devtools
          launchOptions.preferences.devTools = true
        }

        // whatever you return here becomes the launchOptions
        return launchOptions
      })
      on('before:spec', (spec) => {
        console.log('cypress.config.js before:spec hook %s', spec.name)
      })
    },
  },
});
