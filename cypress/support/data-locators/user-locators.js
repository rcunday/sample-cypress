export class UserLocators {
  checkMultipleUserNames(apiDetails) {
    return cy
      .request(Cypress.env('json_placeholder_users'))
      .then((response) => {
        let usernames = Cypress._.chain(response.body)
          .map('username')
          .take(apiDetails.usernames.length)
          .value()
          
        expect(usernames).to.deep.eq(apiDetails.usernames)
      })
  }
}
