const Chance = require('chance')
const chance = new Chance()

context('ToDo', function () {
  beforeEach(function () {
    cy.clearAllLocalStorage()
    cy.clearCookies()
    cy.visit('/todo')
  })
  it('Delete All Todo Items', function () {
    cy.get('.todo-list li').each(($el) => {
      cy.wrap($el).find('input[type=checkbox]').check()
    })
    cy.contains('Clear completed').click()
    // Finally, make sure that the clear button no longer exists.
    cy.contains('Clear completed').should('not.exist')
  })

  it('Add two random to do items', function () {
    // sentence size from 1 to 10 words long
    const size = Math.floor(Math.random() * 9) + 1
    const text1 = chance.sentence({ words: size })
    const text2 = chance.sentence({ words: size })

    cy.addTodo(text1)
    cy.checkTodo(text1)
    cy.addTodo(text2)
    cy.checkTodo(text2)
  })
})
