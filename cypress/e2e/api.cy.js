/// <reference types="cypress"/>

context("API", () => {
  it("Cypress._ - call a lodash method", () => {
    // json_placeholder_users env var is defined in cypress.env.json
    cy.request(Cypress.env("json_placeholder_users")).then((response) => {
      let usernames = Cypress._.chain(response.body)
        .map("username")
        .take(3)
        .value()
      cy.log(usernames)
      expect(usernames).to.deep.eq(["Bret", "Antonette", "Samantha"])
    })
  })
})
