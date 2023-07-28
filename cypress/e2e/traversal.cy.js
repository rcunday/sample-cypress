context('Traversal', function () {
  beforeEach('Navigate to Traversal Content', function () {
    cy.intercept('/commands/traversal').as('traversal')
    cy.visit('/commands/traversal')
    cy.wait('@traversal')
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

  it('use cypress plugin map list items and compare against test data', function () {
    cy.get('.traversal-list>li')
      .map('innerText')
      .should('deep.equal', this.testdata.traversalDetails.cats)
  })

  it('navigate breadcrumbs', function () {
    cy.get('.traversal-breadcrumb>li').each((item) => {
      if (item.hasClass('active')) {
        cy.log(item.text() + ' breadcrumb is active')
      } else {
        cy.log(item.text() + ' breadcrumb is NOT active')
      }
    })
  })

  
})
