context('Actions', function () {
  before(function () {
    cy.clearAllLocalStorage()
    cy.clearCookies()

  })

  beforeEach('Navigate to Command Actions', function () {
    cy.intercept('/commands/actions').as('actions')
    cy.visit('/commands/actions')
    cy.wait('@actions')
    
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.pathname).to.eq('/commands/actions')
      expect(location.port).to.eq('')
      expect(location.protocol).to.eq('https:')
    })

    cy.fixture('testdata.json').then(function (testdata) {
      this.testdata = testdata
    })
  })

  it('Use custom command to type in user email from test data', function () {
    cy.typeUserEmail(this.testdata.userDetails)
  })

  it('Use custom command to perform multiple select fruit items from test data', function () {
    cy.selectMultiFruits(this.testdata.actionDetails)
  })

  it('Use custom command to perform a single select fruit item from test data', function () {
    cy.selectSingleFruit(this.testdata.actionDetails)
  })

  


})
