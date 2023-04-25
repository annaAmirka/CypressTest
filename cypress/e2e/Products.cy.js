let productName, productCost, productQuantity;

describe("HomePage", () => {
  it("Verify cart adding from home page", () => {
    cy.visit(Cypress.env("globalUrl"));
    // cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get(".overlay-content>h2")
      .eq(0)
      .invoke("text")
      .then(($val) => {
        productCost = $val;
      });
    cy.get(".overlay-content>p")
      .eq(0)
      .invoke("text")
      .then(($text) => {
        productName = $text;
      });
    cy.get(".add-to-cart").eq(0).click();
    cy.get("u").click();
    cy.get(".product_image").should("be.exist");
    cy.then(() => {
      cy.get(".cart_total_price").should("contain", "productCost");
    });
    cy.get(".disabled").should("contain", "1");
    cy.get(".col-sm-6 > .btn").click();
    cy.get(".modal-footer > .btn").click();
    cy.get(".modal-body > :nth-child(1)").and(
      "have.text",
      "Register / Login account to proceed on checkout.".trim()
    );
  });
});


import { ProductItem } from "../pages/AutoExercise/Product_item";

let numberCountPolo;
let numberCountHM; let numberCountMadame; let numberCountMastHarbour; 
let numberCountBabyHug; let numberCountAllenSollyJunior; let numberCountKookieKids; let numberCountBiba;
describe("Add items to cart from Home Page", () => {
  it("Add items in cart and try to checkout", () => {
    cy.visit(Cypress.env("globalUrl"));
    cy.get("ul>li").each(($el, index, $list) => {
      expect($list).to.have.length(57);
    });
    cy.get(".nav > :nth-child(1) > a > .pull-right")
      .invoke("text")
      .then(($el) => {
        cy.log($el);
        numberCountPolo = $el.replace("(", "");
        cy.log(numberCountPolo.slice(0, 1));
      });
    cy.get(".nav > :nth-child(2) > a > .pull-right")
      .invoke("text")
      .then(($el) => {
        cy.log($el);
        numberCountHM = $el.replace("(", "");
        cy.log(numberCountHM.slice(0, 2));
      });
    cy.get(".nav > :nth-child(3) > a > .pull-right")
      .invoke("text")
      .then(($el) => {
        cy.log($el);
        numberCountMadame = $el.replace("(", "");
        cy.log(numberCountMadame.slice(0, 3));
      });
    cy.get(".nav > :nth-child(4) > a > .pull-right")
      .invoke("text")
      .then(($el) => {
        cy.log($el);
        numberCountMastHarbour = $el.replace("(", "");
        cy.log(numberCountMastHarbour.slice(0, 4));
      });
    cy.get(".nav > :nth-child(5) > a > .pull-right")
      .invoke("text")
      .then(($el) => {
        cy.log($el);
        numberCountBabyHug = $el.replace("(", "");
        cy.log(numberCountBabyHug.slice(0, 5));
      });
    cy.get(".nav > :nth-child(6) > a > .pull-right")
      .invoke("text")
      .then(($el) => {
        cy.log($el);
        numberCountAllenSollyJunior = $el.replace("(", "");
        cy.log(numberCountAllenSollyJunior.slice(0, 6));
      }); 
    cy.get(".nav > :nth-child(7) > a > .pull-right")
      .invoke("text")
      .then(($el) => {
      cy.log($el);
      numberCountKookieKids = $el.replace("(", "");
        cy.log(numberCountKookieKids.slice(0, 7));
      }); 
    cy.get(".nav > :nth-child(8) > a > .pull-right")
      .invoke("text")
      .then(($el) => {
      cy.log($el);
      numberCountBiba = $el.replace("(", "");
      cy.log(numberCountBiba.slice(0, 8));
      });  
    });
});

describe("Check category items", () => {
  it("Add items in cart and try to checkout, when Logged out", () => {
    cy.visit(Cypress.env("globalUrl"));
    cy.get("ul>li").each(($el, index, $list) => {});
    cy.get(".left-sidebar > h2").should("contain", "Category");
    cy.get('[data-parent="#accordian"]').eq(0).click();
    cy.get("#Women > .panel-body").then(($el) => {
      expect($el).to.contain("Dress");
      expect($el).to.contain("Tops");
      expect($el).to.contain("Saree");
    });
    cy.get(".left-sidebar > h2").should("contain", "Category");
    cy.get('[data-parent="#accordian"]').eq(1).click();
    cy.get("#Men > .panel-body").then(($el) => {
      expect($el).to.contain("Tshirts");
      expect($el).to.contain("Jeans");
    });
    cy.get(".left-sidebar > h2").should("contain", "Category");
    cy.get('[data-parent="#accordian"]').eq(2).click();
    cy.get('#Kids > .panel-body > ul > :nth-child(1) > a').then(($el) => {
      expect($el).to.contain("Dress");
      expect($el).to.contain("");
    });
  });
});

describe("Home page Subscribe form", () => {
     it("Allow users to subscribe to the email list", () => {
     cy.visit(Cypress.env('globalUrl'));
      cy.get(".single-widget").should("contain", "Subscription");
      cy.get(".single-widget").should(
        "contain",
        "Get the most recent updates from our site and be updated your self..."
      );
      cy.get("#susbscribe_email").type("test@test.com");
      cy.get("#subscribe").click();
      cy.get(".alert-success").should("exist");
    });
    // if message contains this email
    //cy.get('.alert-success').should("exist").contain("test@test.com"")
      it("Does NOT allow invalid email address", () => {
      cy.visit(Cypress.env('globalUrl'));
      cy.get("#susbscribe_email").type("test");
      cy.get("#subscribe").click();
    });
    });
    