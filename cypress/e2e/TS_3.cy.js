describe("HomeButton", () => {
  it("should navigate to the home page when clicked", () => {
    //Visit the page where the home button is located
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");

    //Get the home button element and click it
    cy.get(".home a").click();
  });
});

//About us
describe("About Us button", () => {
  it("should navigate to the About Us page when clicked", () => {
    //Visit the page where the About Us button is located
    cy.visit("https://parabank.parasoft.com/parabank/about.htm");

    //Get the About Us button element and click it
    cy.get(".leftmenu > :nth-child(2) >a").click();
  });
});


// Services
  describe("Services", () => {
  it("should navigate to the Services when clicked", () => {
    //Visit the page where Services is located
    cy.visit("https://parabank.parasoft.com/parabank/services.htm");
    //Get the Services element and click it
    cy.get(".leftmenu > :nth-child(3) >").click();
  })
});

// Products
describe("Products", () => {
  it("should navigate to the Services when clicked", () => {
    //Visit the page where Services is located
    cy.visit("https://www.parasoft.com/products/");
  })
});

//Locations
describe("Locations", () => {
  it("should navigate to the Services when clicked", () => {
    //Visit the page where Services is located
    cy.visit("https://parabank.parasoft.com/parabank/services.htm");
  })
});

