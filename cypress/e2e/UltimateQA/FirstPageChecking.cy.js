/// <reference types ="Cypress" />

//import { realHover } from "cypress-real-events/commands/realHover";
//import { contains } from "cypress/types/jquery";


describe("The section of buttons", () => {
    it("Check the buttons clickablity and buttons hover", () => {
    cy.visit("https://ultimateqa.com/automation");
    cy.get(".et_pb_text_inner > ul > :nth-child(1) > a").click();
    cy.get(".et_pb_button")
      .eq(0)
      .contains("Button")
      .should("have.css", "background-color", "rgb(128, 203, 121)");
          cy.get(".et_pb_button").eq(1).realHover().then(($element)=>{
          cy.wrap($element)
          .invoke('css', 'background-color')
          .then(background => {
           cy.log(background)
            expect($element).to.have.css("background-color",background)
        });
    });
});
})

describe('Random Stuff section', () => {
    beforeEach(() => {
      cy.visit('https://ultimateqa.com/complicated-page/#RandomStuff')
    })
  
    it('should verify the first page', () => {
      cy.get('.et_pb_contact_form_label').eq(0).should('contain', 'Name');
      cy.get('.et_pb_contact_form_label').eq(1).should('contain', 'Email Address');
      cy.get('.et_pb_contact_form_label').eq(2).should('contain', 'Message');
      cy.get('#et_pb_contact_form_1 > .et_pb_contact > .et_pb_contact_form').submit();
      cy.get('.et_pb_login_0').eq(0).type('Anna', '12345').click();
      cy.get('.et_pb_toggle').click()
      cy.get('.et_pb_contact_field').eq(0).should('contain', 'Name');
      cy.get('.et_pb_contact_field').eq(1).should('contain', 'Email Address');
      cy.get('.et_pb_contact_field').eq(2).should('contain', 'Message');
      cy.get('#et_pb_contact_form_1 > .et_pb_contact > .et_pb_contact_form').submit();
      cy.get('.et_pb_login_1').eq(0).type('Annushka', '123456').click();
      cy.get('.et_pb_contact_field').eq(3).should('contain', 'Name', 'Annushka');
      cy.get('.et_pb_contact_field').eq(4).should('contain', 'Email Address', 'a@gmail.com');
      cy.get('.et_pb_contact_field').eq(5).should('contain', 'Message', "Barev");
      cy.get('#et_pb_contact_form_2 > .et_pb_contact > .et_pb_contact_form').submit();
       });
    });