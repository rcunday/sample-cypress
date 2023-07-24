/// <reference types="cypress"/>

context("Simple", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("check the title content of the page", () => {
    cy.title().should("eq", "Cypress.io: Kitchen Sink")
  })
})
