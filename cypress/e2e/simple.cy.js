context("Simple", function() {
  before("Obtain Verification Data", function () {
    cy.fixture("testdata.json").then(function (testdata) {
      this.testdata = testdata
    })
  })

  beforeEach(function () {
    cy.visit("/")
  })

  it("check the title content of the page", function () {
    cy.title().should("eq", this.testdata.uiDetails.homeTitlePage)
  })
})
