import { ActionLocators } from '../element-locators/action-locators'
const actionLocators = new ActionLocators()

/**
 * Method to type in user email address
 * @argument userDetails
 */
Cypress.Commands.add('typeUserEmail', (userDetails) => {
  cy.log(userDetails.userEmail)
  actionLocators
    .actionInputEmail()
    .should('exist')
    .should('be.visible')
    .type(userDetails.userEmail)
    .should('have.value', userDetails.userEmail)
})

/**
 * Method to select multiple friut items with map query
 * @argument actionDetails
 */
Cypress.Commands.add('selectMultiFruits', (actionDetails) => {
  cy.wrap(actionDetails.actionFruits.multipleSelectItems).print()
  actionLocators
    .actionSelectMultiple()
    .should('exist')
    .should('be.visible')
    .select(actionDetails.actionFruits.multipleSelectItems)
    .invoke('val')
    .should('deep.equal', actionDetails.actionFruits.multipleSelectValues)
})

/**
 * Method to select multiple friut items
 * @argument actionDetails
 */
Cypress.Commands.add('selectSingleFruit', (actionDetails) => {
  cy.wrap(actionDetails.actionFruits.singleSelectValue).print()
  actionLocators
    .actionSelectSingle()
    .should('exist')
    .should('be.visible')
    .select(actionDetails.actionFruits.singleSelectItem)
    .should('have.value', actionDetails.actionFruits.singleSelectValue)
})
