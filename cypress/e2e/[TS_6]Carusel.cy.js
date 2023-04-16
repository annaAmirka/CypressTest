describe("Carusel", () => {
  it("Loads the homepage and checks for icons", () => {
    cy.visit(Cypress.env("globalUrl"));
    cy.get(".item").then(($elem) => {
      expect($elem).to.contain('Automation')
      expect($elem).to.contain('Full-Fledged practice website for Automation Engineers')
      expect($elem).to.contain('All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.')
    });
    cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('be.visible').and('contain','Test Cases');
    cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('have.css','background-color','rgb(92, 184, 92)');
    // cy.get('.active > :nth-child(1) > .test_cases_list > .btn').trigger('mouseover').then(($elem)=>{
    //     cy.wait(3000);
    //   expect($elem).to.have.css('background-color','rgb(92, 184, 92)');
    // })
     cy.get('.active > :nth-child(1) > .test_cases_list > .btn').trigger('mouseover')
     cy.wait(1000);
     cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('have.css','background-color','rgb(92, 184, 92)')
    cy.get('.active > :nth-child(1) > .apis_list > .btn').should('have.css','background-color','rgb(92, 184, 92)').and('contain','APIs list for practice');
   cy.wait(7000)
   cy.get(".item").should('have.class','active')
  });
});
