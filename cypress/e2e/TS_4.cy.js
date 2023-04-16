import { signUp} from "../pages/AutoExercise/signUp";

describe("Registration", () => {
  it("Should successfully register a new user", () => {
let userName,secondUserName
 beforeEach(() => {});
 it("Verify login functionality with valid credentials", () => {
    signUp.visit("login");
    signUp.getuserName().type(signUp.generateRandomName(5, ""));
    signUp.getuserName().invoke("val").then((val) => {
        userName = val;
        cy.log(userName);
      });
    })
  });

    signUp.getEmail().type(signUp.generateRandomName(5, "@gmail.com"));
    signUp.submit().click();
    cy.get('[data-qa="name"]').invoke("val").then((text) => {
        secondUserName=text;
        cy.log(secondUserName);
      });
    cy.get('[data-qa="name"]').then(($val)=>{
     expect($val).to.include(userName)
    });
  });