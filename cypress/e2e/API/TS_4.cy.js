import {bodyData} from "../../fixtures/bodtyData.json"

//const newData=JSON.parse(JSON.stringify(bodyData));
describe("API testing", () => {
  it("API testing", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        cy.log(response);
        expect(response.body[5].id).to.eq(6);
        expect(response.body[8].title).contains(
          "nesciunt iure omnis dolorem tempora et accusantium"
        );
        expect(response.body.length).to.eq(100);
      }
    );
  });
  it("Add New Post", () => {

    
    cy.addNewPost()
    
  });
});
