/// <reference types="cypress"/> 

describe('MyTest Suite',function(){
    it('verify title of the page-positive',function(){
      cy.visit("https://demo.nopcommerce.com")
      cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch") 
      cy.get('.search-box-button').click()
      cy.wait(3000)
      cy.get('.product-title>a').click()
      cy.get('#product_enteredQuantity_4').clear().type('3')
      cy.get('#add-to-cart-button-4').click()
      cy.wait(4000)
      cy.get('.cart-label').click()
      cy.get('.product-subtotal').contains('$5,400.00')
      
      
    })

    
})