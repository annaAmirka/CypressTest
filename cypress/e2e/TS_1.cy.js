import { loginPage } from "../pages/Login";
import { data } from "../utils/data";
import { validationMessages } from "../utils/messages";

describe("SignIn", () => {
  it("Verify login functionality with valid credentials", () => {
    cy.login();
    cy.wait(3000);
    // loginPage.visit();
    // //read once more about should assertion
    // loginPage
    //   .getloginForm()
    //   .should("contain", "Username")
    //   .and("contain", "Password");
    // loginPage.getUsername(data.username);
    // loginPage.getPassword(data.password);
    // loginPage.submit().then(($button) => {
    //   expect($button).to.have.css('background-color','rgb(202, 129, 37)');
    //   expect($button).to.have.value('Log In')
    // });
    // loginPage.submit().click();
    // //read about expect and then function
    // cy.get(".error").then(($error) => {
    //   expect($error).to.contain(validationMessages.loginError);
    // });
    //  cy.url().should('include', '/parabank/overview.htm')
  });

 it('Verify login functionality with invalid username',() =>{
  loginPage.visit();
  loginPage.getUsername(data.invalidUsername);
  loginPage.getPassword(data.password);
  loginPage.submit();
  cy.url().should('include', 'parabank/register.htm');
 });

 it('Verify login functionality with invalid password',() =>{
  loginPage.visit();
  loginPage.getUsername(data.username);
  loginPage.getPassword(data.invalidPassword);
  loginPage.submit();
  cy.url().should('include', 'parabank/register.htm');
 });

 it('Verify login functionality with invalid credentials',() =>{
  loginPage.visit();
  loginPage.getUsername(data.invalidUsername);
  loginPage.getPassword(data.invalidPassword);
  loginPage.submit();
  cy.url().should('include', 'parabank/register.htm');
 });

 it('Verify login functionality with empty credentials',() =>{
  loginPage.visit();
  loginPage.getUsername(data.emptyString);
  loginPage.getPassword(data.emptyString);
  loginPage.submit();
  cy.url().should('include', 'parabank/register.htm');
 });

 it('Verify login functionality with empty username',() =>{
  loginPage.visit();
  loginPage.getUsername(data.emptyString);
  loginPage.getPassword(data.password);
  loginPage.submit();
  cy.url().should('include', 'parabank/register.htm');
 });

 it('Verify login functionality with empty password',() =>{
  loginPage.visit();
  loginPage.getUsername(data.username);
  loginPage.getPassword(data.emptyString);
  loginPage.submit();
  cy.url().should('include', 'parabank/register.htm');
 });


});
