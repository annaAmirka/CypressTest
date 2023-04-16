class signUp {
   
    visit(endpoint) {
       return  cy.visit(Cypress.env('globalUrl')+endpoint);
      }
    
     getUserName() {
        return cy.get('[data-qa="signUp-name"]');
      }
     getEmail() {
        return cy.get('[data-qa="signUp-email"]')
     }
      getPassword() {
        return cy.get('[data-qa="password"]');
      }
    
      submit() {
        return cy.get('[data-qa="signUp-button"]');
      }
      
      generateRandomName(length,email=''){
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return `test${result}${email}`;
  
      }
  }


  export const signup = new signUp();