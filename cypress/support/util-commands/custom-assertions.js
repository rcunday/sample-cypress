// add custom Chai assertion to confirm multiple attributes
chai.use((_chai) => {
  // use "function" syntax to make sure when Chai
  // calls it, the "this" object points at Chai
  function assertAttributes(attributes) {
    Object.keys(attributes).forEach((attr) => {
      const value = this._obj.attr(attr)
      const expectedValue = attributes[attr]
      this.assert(
        value === expectedValue,
        `expected to find attribute **${attr}: ${expectedValue}**, found **${value}**`,
      )
    })
  }
  _chai.Assertion.addMethod('attributes', assertAttributes)
})

// example custom Chai assertion
// to confirm multiple element attributes at once
// cy.contains('a', 'About').should('have.attributes', {
//     href: '/about',
//     target: '_blank',
//     // but we do not care about "id" attribute
//   })
