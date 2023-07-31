//const Chance = require('chance')
//const chance = new Chance()

describe('TodoMVC', function () {
  this.beforeEach(function () {
    cy.clearAllLocalStorage()
    cy.clearCookies()
    cy.visit('/todo')
  })

  context('Update Todo Items', function () {
    it('Delete All Todo Items', function () {
        cy.get(".todo-list li")
        .each(($el) => {
            cy.wrap($el)
            .find('input[type=checkbox]')
            .check()
        })
        cy.contains('Clear completed').click()
      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      // Note that even where we marked Walked the Dog
      // as completed and clear completed clicked,
      // the Work the Dog item is not deleted.  
      cy.get('.todo-list li')
      .should('have.length', 1)
      .should('not.have.text', 'Pay electric bill')

    // Finally, make sure that the clear button no longer exists.
    cy.contains('Clear completed').should('not.exist')
    })

    // it('Add random to do items', function () {
    //   const size = Math.floor(Math.random() * 10) + 3
    //   const text1 = chance.sentence({ words: size })

    //   cy.addTodo(text1)
    // })
  })
})
