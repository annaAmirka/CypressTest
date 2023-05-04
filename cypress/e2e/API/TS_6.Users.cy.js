/// <reference types ="Cypress" />

describe("API testing", () => {
    it("Get all numbers", () => {
      cy.request({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users"
      }).then((resp) => {
         const nameOfsite = resp.body[0].website
         return nameOfsite
      })
        .then((nameOfsite) => {
        cy.request({
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/users" 
        }).then((resp) => {
          expect(resp.status).to.eq(200)
          expect(resp.body[0]).to.have.property('website', nameOfsite)
          cy.log(resp)
        });
      });
  });      
});