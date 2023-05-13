/// <reference types="cypress" />

import { registration } from "../pages/AutoExercise/signUp";
import { validAccountData, signUpData } from "../utils/signUpData";

let userName, secondUserName;

describe("Registration", () => {
  it.only("Verify that the form UI matches with the requirements", () => {
    registration.visit("login");
    cy.get(".signup-form > h2").contains("New User Signup!");
    registration.getUserName().should("have.attr", "placeholder", "Name");
    registration.getEmail().type("have.attr", "placeholder", "Email Address");
    registration
      .getUserName()
      .type("have.css", "background-color", "inputs.backgroundColor");
    registration
      .submit()
      .contains("Signup")
      .type("have.css", "background-color", "inputs.buttonColor");
    registration.submit().each(($el) => {
      $el.trigger("mouseover");
      expect($el).to.have.css;
    });
  });
});

it("Verify login functionality with valid credentials", () => {
  registration.visit("login");
  registration.getUserName().type(registration.generateRandomName(5, ""));
  registration
    .getUserName()
    .invoke("val")
    .then((val) => {
      userName = val;
      cy.log(userName);
    });
  registration
    .getEmail()
    .type(registration.generateRandomName(5, "@gmail.com"));
  registration
    .submit()
    .click()
    .then((text) => {
      secondUserName = text;
      cy.log(secondUserName);
    });
});

it("Verify registration functionality with empty username", () => {
  registration.visit("login");
  const emptyUserName = registration.getUserName().clear();
  emptyUserName.blur();
  registration.getUserName().type("have.attr", "inputs.requiredField");
  registration
    .getEmail()
    .type(registration.generateRandomName(5, "@gmail.com"));
  registration.submit().click();
});

it("Verify registration functionality with empty email", () => {
  registration.visit("login");
  registration.getUserName().type(registration.generateRandomName(5));
  const emptyEmail = registration.getEmail().clear();
  emptyEmail.blur();
  registration.getEmail().type("have.attr", "inputs.requiredField");
  registration.submit().click();
});

it("Verify registration functionality without symbol @ in email address", () => {
  registration.visit("login");
  registration.getUserName().type(registration.generateRandomName(5));
  registration.getEmail().type(registration.generateRandomName(5, "gmail.com"));
  registration.submit().click();
});

it.only("Verify user information", () => {
  registration.visit("login");
  registration.getUserName().type(registration.generateRandomName(5, ""));
  registration
    .getUserName()
    .invoke("val")
    .then((val) => {
      userName = val;
    });
  registration
    .getEmail()
    .type(registration.generateRandomName(5, "@gmail.com"));
  registration.submit().click();
  cy.get('[data-qa="name"]')
    .invoke("val")
    .then((text) => {
      secondUserName = text;
      cy.log(secondUserName);
    });
  cy.url().should("include", "/signup");
  cy.get(".login-form").then(($elem) => {
  //expect($elem).to.contain("Enter Account Information");
  });
  cy.get(".clearfix").then(($elem) => {
  //expect($elem).to.contain("Title");
  });

  registration.getGender().check();
  registration.getPassword().type(123456);
  registration.getDayofBirth().select(1);
  registration.getDateofMonth().select("June");
  registration.getDateofYear().select("2020");
  registration.getourNewsLetter().check();
  registration.getOptin().check();
  registration.getFirst_name().type("Anna");
  registration.getLast_name().type("Smith");
  registration.getCompany().type("Flowers");
  registration.getAddress().type("Highway 20");
  registration.getCountry().type("England");
  registration.getState().type("Italy");
  registration.getCity().type("London");
  registration.getZipcode().type(446);
  registration.getMobileNumber().type(681002033);
  registration.getCreateAccount().click();
});
