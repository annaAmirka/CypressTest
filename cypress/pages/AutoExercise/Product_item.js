class ProductItems  {
    visit (endpoint) {
    cy.visit(Cypress.env('globalUrl')+endpoint);
  };
  
  getProductItems()  {
   return cy.get('.brands-name > .nav > :nth-child(2) > a');

  }
  
  getProductItems()  {
    return cy.get('.brands-name > .nav > :nth-child(3) > a');
 
}
 getProductItems()  {
    return cy.get('.brands-name > .nav > :nth-child(4) > a');

 }

 getProductItems()  {
    return cy.get('.brands-name > .nav > :nth-child(5) > a');
 }   

   getProductItems()  {
   return cy.get('.brands-name > .nav > :nth-child(6) > a');
} 

   getProductItems()  {
   return cy.get('.brands-name > .nav > :nth-child(7) > a');
}
   getProductItems ()  {  
   return cy.get('.brands-name > .nav > :nth-child(8) > a');
}
}

  export const ProductItem = new ProductItems();


 