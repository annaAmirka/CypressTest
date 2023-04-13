class HomeButton {
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');  
    
  }
  //Get the home button element and click it
 getHomeButton () {
 return cy.getHomeButton('<li class="home"><a href="/parabank/index.htm">home</a></li>').click ();
}
}


class AboutUs {
visit() {
  cy.visit ('https://parabank.parasoft.com/parabank/about.htm');
}
//Get the Abut Us button and click it
getAboutUs () {
  return cy.getAboutUs ('.leftmenu > :nth-child(3) > a').click ();
}
}

class Services {
  visit() {
    cy.visit ('https://parabank.parasoft.com/parabank/services.htm');
  }
  //Get the Services and click it
  getServices () {
    return cy.getServices ('<a href="about.htm">About Us</a>').click ();
  }
};

class Products {
  visit() {
    cy.visit ('https://.parasoft.com/products/');
  }
  //Get the Products and click it
  getProducts () {
    return cy.getProducts ().click ();
  }
  }