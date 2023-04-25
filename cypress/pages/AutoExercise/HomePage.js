class Products {
    visit() {
      cy.visit ('https://.parasoft.com/products/');
    }
    //Get the Products and click it
    getProducts () {
    return cy.getProducts ('[.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn]').type(value);
    }
  }
  //Get the product Name
  getproductName();
    return cy.get ('[.overlay-content >h2]').type(value);  
    
  //Get product Quantity
  getproductQuantity ();
    return cy.get ('[disabled]').type(value);




