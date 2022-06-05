/// <reference types="cypress"/> 
describe('MyTest Alert',function(){
   /* 
    it('Alert verification',function(){
     
        cy.visit('https://demo.nopcommerce.com/')

        cy.get('.search-box-button').click();

        cy.on('window:alert',(str) =>
        {
          expect(str).to.equal('Please enter some search keyword')
        }
        )
    }) */

    it('Alert confirm verification',function(){
     
        cy.visit('https://testautomationpractice.blogspot.com/')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
       
        cy.get('#HTML9 > div.widget-content > button').click()


        cy.on('window:confirm',(str) =>
        {
            expect(str).to.equal('Press a button!')
        }
        )
    })

})
