export class ActionLocators {
  actionInputEmail() {
    return cy.get('.action-email')
  }
  actionSelectMultiple() {
    return cy.get('.action-select-multiple')
  }
  actionSelectSingle() {
    return cy.get('.action-select')
  }
}
