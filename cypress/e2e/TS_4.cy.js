class LoginPage {
    visit() {
      cy.visit (Cypress.'global'))
    };
  
    getloginForm() {
      return cy.get("#loginPanel")
    };
  
    getUsername(value) {
      return cy.get(".input").first().type(value)
    };
  
    getPassword(value) {
      return cy.get(":nth-child(4) > .input").type(value);