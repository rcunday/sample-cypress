import { UserLocators } from "../data-locators/user-locators"    
const userLocators = new UserLocators();
/**
 * API method to check usernames
 * @argument apiDetails
 */
Cypress.Commands.add("checkUserNames", (apiDetails) => {
    userLocators
        .checkMultipleUserNames(apiDetails)
})