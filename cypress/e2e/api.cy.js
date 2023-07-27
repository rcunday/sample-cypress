context("API", function ()  {
  before("Obtain Verification Data", function () {
    cy.fixture("testdata.json").then(function (testdata) {
      this.testdata = testdata
    })
  })

  it("call API method and compare usernames", function() {
    cy.checkUserNames(this.testdata.apiDetails)
  })

})
