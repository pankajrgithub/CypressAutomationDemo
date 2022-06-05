/// <reference types="cypress"/> 
describe('MyTest Suite1',function(){
    
    it('Mercury login Page',function(){

      cy.visit("https://demo.guru99.com/test/newtours/index.php")

      cy.url().should('include','newtours')
      
      cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
      cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")
      
      cy.get('input[name=submit]').should('be.visible').click();
      
      //title verification

      cy.title().should('eq','Login: Mercury Tours')

      cy.get('tr.mouseOut:nth-child(2) > td:nth-child(2) > a:nth-child(1)').click()

      cy.title().should('eq','Find a Flight: Mercury Tours:')

      cy.get('[value=roundtrip]').should('be.be.visible').should('be.checked')

      cy.get('[value=oneway]').should('be.visible').should('not.be.checked').click()

      cy.get('[name=findFlights]').should('be.visible').click()

      cy.title().should('eq','Find a Flight: Mercury Tours:')
    })

})