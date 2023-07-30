/**
 * Utility method to check current url returns 200
 */
Cypress.Commands.add('checkUrl', (link) => {
  cy.get(link).then((link) => {
    cy.request(link.prop('href')).should('eq', 200)
  })
})
