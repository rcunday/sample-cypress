/// <reference types="cypress"/>

context("Actions", function () {
  before(function () {
    cy.clearAllLocalStorage()
    cy.clearCookies()
  })

  beforeEach("Navigate to Command Actions", function () {
    cy.visit("/commands/actions")
    cy.fixture("testdata.json").then(function (testdata) {
      this.testdata = testdata
    })
  })

  it("Use custom command to type in user email from test data", function () {
    cy.typeUserEmail(this.testdata.userDetails)
  })

  it("Use custom command to perform multiple select fruit items from test data", function () {
    cy.selectMultiFruits(this.testdata.actionDetails)
  })

  it("Use custom command to perform a single select fruit item from test data", function () {
    cy.selectSingleFruit(this.testdata.actionDetails)
  })
})
