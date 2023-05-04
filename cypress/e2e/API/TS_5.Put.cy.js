/// <reference types ="Cypress" />

let usernumber;
let obj={
  id: 1,
  title: "created",
  body: "new body",
}

describe('Updating a data', () => {
    it.only('should update data', () => {
      cy.request ({ 
        method: 'PUT',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        body: {
          title: 'New title',
          body: 'New body',
          userId: 1,
          id:1
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq('New title');
        expect(response.body.body).to.eq('New body');
        expect(response.body.userId).to.eq(1);
      });
    });
  });

//   