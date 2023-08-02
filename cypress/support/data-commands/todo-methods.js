import {
  ToDoLocators,
  todoAllItems,
} from '../element-locators/todo-locators'
const todoLocators = new ToDoLocators()

Cypress.Commands.add('addTodo', (text) => {
  todoLocators.todoNewItem().type(text + '{enter}')
  // check when the new todo appears in the list
  cy.contains(todoAllItems, text)
  cy.wrap(text)
})

Cypress.Commands.add('checkTodo', (text) => {
  cy.contains(todoAllItems, text)
})
