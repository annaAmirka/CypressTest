
describe("API Test - Get Products", () => {
    it("returns a list of products with status code 200", () => {
      cy.request({
         method: "GET", 
         url:  "https://automationexercise.com/api/productsList",
      }).then(
        (response) => {
          cy.log(response)
          expect(response.status).to.eq(200);
          expect(response.body)


        });
     })
})