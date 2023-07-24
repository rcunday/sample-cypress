
import { ActionLocators } from "../element-locators/action-locators"    
const actionLocators = new ActionLocators();

/**
 * Method to type in user email address
 * @argument userDetails
 */
Cypress.Commands.add("typeUserEmail", (userDetails) => {
    cy.log(userDetails.userEmail)
    actionLocators
    .actionInputEmail()
    .should("exist")
    .should("be.visible")
    .type(userDetails.userEmail)
    .should("have.value", userDetails.userEmail)
})

/**
 * Method to select multiple friut items
 * @argument actionDetails
 */
Cypress.Commands.add("selectMultiFruits", (actionDetails) => {
    cy.log(actionDetails.actionFruits.multipleSelectItems)
    actionLocators
    .actionSelectMultiple()
    .should("exist")
    .should("be.visible")
    .select(actionDetails.actionFruits.multipleSelectItems)
    .invoke("val")
    .should("deep.equal", actionDetails.actionFruits.multipleSelectValues)
})

/**
 * Method to select multiple friut items
 * @argument actionDetails
 */
Cypress.Commands.add("selectSingleFruit", (actionDetails) => {
    cy.log(actionDetails.actionFruits.singleSelectItem)
    actionLocators
    .actionSelectSingle()
    .should("exist")
    .should("be.visible")
    .select(actionDetails.actionFruits.singleSelectItem)
    .should("have.value", actionDetails.actionFruits.singleSelectValue)
})