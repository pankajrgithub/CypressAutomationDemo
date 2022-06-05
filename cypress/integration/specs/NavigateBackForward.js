/// <reference types="cypress"/> 
describe('Navigations',function(){
     
     it('Navigation back forward and title validation',function(){
      
         cy.visit('https://demo.nopcommerce.com/')
 
         cy.title().should('eq','nopCommerce demo store')

         cy.get('.ico-register').contains('Reg').click()

         cy.title().should('eq','nopCommerce demo store. Register')

         cy.go('back') //cy.go('-1')

         cy.title().should('eq','nopCommerce demo store')

         cy.go('forward')  //cy.go('1')

         cy.title().should('eq','nopCommerce demo store. Register')


         cy.reload()  //it will referesh the page
     })

    })