describe("Products Api Tests", () => {
    it("Get All Products List", () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then(
            (response) => {
                cy.log(response)
            //   // response.body is automatically serialized into JSON
              expect(response.status).to.eq(200) // true
              expect(response.body[0].title).to.eq("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
            }
          )
    });
  });

  describe ('API testing', () => {
    it.only('API testing', () => {  
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then(
        (response) => {
            cy.log (response)
          expect(response.body[5].id).to.eq(6)
          expect(response.body[8].title).contains ('nesciunt iure omnis dolorem tempora et accusantium')
          expect(response.body.length).to.eq(100)
     });
    });
})   