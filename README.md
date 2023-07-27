# Sample Cypress Test Script

This is a simplified example that is a learning excercise to gain a better understanding of [Cypress.io](https://www.cypress.io/) testing.  This example directly leverages the public Cypress.io kitchen website and was based on [Cypress Example Kitchen Sink] (https://github.com/cypress-io/cypress-example-kitchensink/) rather than spinning up a local
instance of the web application.


```bash
## fork this repo 
https://github.com/rcunday/sample-cypress.git

## add Cypress secret to forked repo
## Settings > Secrets and variables > Actions > Secrets tab
## Note: Secret will not be readable after entry.
CYPRESS_RECORD_KEY - Add API KEY GUID VALUE

## clone your repo to a local directory
git clone https://github.com/[username]/sample-cypress.git

## cd into the cloned repo
cd sample-cypress

## install the node_modules
npm install

## assign initial your Cypress Project API key
npx cypress run --record --key your-API-key-value-here

## Update/Change the projectId in cypress.config.js
  e2e: {
    'projectId':'your-6-char-project-key-value-here',
    ...

# launch the cypress test runner
npm run cy:open

# or run all the cypress specs using the cli runner
npm run cy:run
```