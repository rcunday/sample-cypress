context('Traversal', function () {
  beforeEach('Navigate to Traversal Content', function () {
    cy.visit('/commands/traversal')
    cy.fixture('testdata.json').then(function (testdata) {
      this.testdata = testdata
    })
  })

  it('use lodash to convert and map list items and compare against test data', function () {
    const getListItems = ($el) => {
      return Cypress._.map($el, 'innerText')
    }
    cy.get('.traversal-list>li')
      .then(getListItems)
      .should('deep.equal', this.testdata.traversalDetails.cats)
  })
})
