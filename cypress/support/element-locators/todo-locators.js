
export const todoAllItems = '.todo-list li'

export class ToDoLocators {
  todoAllItems() {
    return cy.get('.todo-list li')
  }
  todoNewItem() {
    return cy.get('.new-todo')
  }
}
