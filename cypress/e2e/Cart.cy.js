/// <reference types="cypress" />

  import {shopping} from "../pages/AutoExercise/cart_Items";
  import {registration, signUp} from "../pages/AutoExercise/signUp";
  //import {inputs} from "../utils/data/colors"


describe("Add carts to the basket", () => {
 it("Verify Add to Cart functionality", () => {
  registration.visit();
  shopping.getFirsrtCartBtn().click();
  shopping.getModal(".modal-content").should("be.visible");
  });
  
  it("Verify the content of the modal", () => {
  cy.visit(Cypress.env("globalUrl"));
  shopping.getFirsrtCartBtn().click();
  shopping.getModal().should("be.visible").find(".icon-box").should("exist");
  shopping
    .getModal()
    .should("be.visible")
    .find(".modal-title")
    .should("exist");
  shopping
      .getModal()
      .should("be.visible")
      .find(".modal-body > :nth-child(2)")
      .should("exist");
  shopping
      .getModal()
      .should("be.visible")
      .find(".modal-footer > .btn")
      .should("exist");
  });

});

  it("Verify View Product button functionality", () => {
    registration.visit();
    shopping.getFirstCartView().click();
    cy.url("includes", "product_details/1");
  });


let productCost

describe("HomePage", () => {
  it("Verify cart adding from home page", () => {
    cy.visit(Cypress.env("globalUrl"));
    cy.get(".features_items > .title").should("contain", "Features Item");
    cy.get(".features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn").click();
    cy.get(".add-to-cart").eq(0).click();
    cy.get("u").click();
    cy.get(".product_image").should("be.exist");
    cy.get("#product-1 > td.cart_price > p").eq(0).invoke("text").then(($text) => {
      });
      cy.then(() => {
      cy.get(".cart_total_price").click();
    });
    });
  });      


    it.only('Add items to the cart and checkout when logged in', () => {
      cy.visit(Cypress.env("globalUrl"));
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
      //cartItems.Added_Modal()
      cy.get('.modal-footer > .btn').click()
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2')
        .invoke('text')
        .then(($cost) => {
        "productCost = $cost"
    })
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p')
        .invoke('text')
        .then(($Name)=>{
         "productName = $Name"
    });
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
      cy.get('u').click()
      cy.get('.product_image').should("be.exist");
      cy.then (()=> {
      cy.get('.cart_description > h4').type('contain', ".productName")
    });
      cy.then (()=> {
      cy.get(':nth-child(5) > .btn').type('contain', ".productCost");
    }) 
 });




