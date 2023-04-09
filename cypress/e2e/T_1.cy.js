import { loginPage } from "../pages/Login.js";
import { data } from "../utils/data";
describe("SignIn", () => {
  it("Verify login functionality with valid credentials", () => {
   loginPage.visit();
   loginPage.getUsername(data.username)
   loginPage.getPassword('username')
   loginPage.submit();
   cy.url().should('include', '/parabank/overview.htm')
  });
});
