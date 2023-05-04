/// <reference types ="Cypress" />

//import {bodyData} from "../fixtures/bodyDataPosts.json"

const dataJson = require("../../fixtures/createJson.json");


describe("Post method test-To all Product List", () => {
    it("should return a 405 status and an error message", () => {
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



  describe("API testing", () => {
    it.only("Post requests", () => {
      cy.fixture("createJson").then((payload) => {
        cy.request({
          method: "POST",
          url: "https://jsonplaceholder.typicode.com/posts",
          body: {
            userId: payload.userId,
            id: payload.id,
            title: payload.title,
            body: payload.body,
          }
        }).then((response) => {
          cy.log(JSON.stringify(response));
          expect(response.status).to.eq(201),
            expect(response.body).has.property("title", payload.title),
            expect(response.body).has.property("userId", payload.userId),
            expect(response.body).to.have.property("id", payload.id),
            expect(response.body).has.property("body", payload.body);
        });
      });
    });
  });
  