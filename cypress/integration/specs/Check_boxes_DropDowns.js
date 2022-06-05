/// <reference types="cypress"/> 
describe('MyTest Suite2',function(){
    
    it('Automation Practice checkboxes',function(){

      cy.visit("http://demo.automationtesting.in/Register.html")

      cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
      cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
      cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')


      //negative validation

      cy.get('#checkbox1').uncheck().should('not.be.checked')
      cy.get('#checkbox2').uncheck().should('not.be.checked')
      cy.get('#checkbox3').uncheck().should('not.be.checked')

     //select all checkbox at onence

     cy.get('input[type=checkbox]').check(['Cricket','Hockey','Movies'])
    }),
    //dropdown with select
    it('Dropdown Static',function(){

        cy.get('#Skills').select('Android').should('have.value','Android')

    })

    //select without select tag
    it('multi select language',function(){

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains("English").click()
        cy.get('.ui-corner-all').contains("Danish").click()
    })

//searchable dropdown select country
    it('select country',function(){

        cy.get('[role=combobox]').click({force:true})  //{force:true}) forcefully click to another element after being covered by another list item
        cy.get('.select2-search__field').type("Ind")
        cy.get('.select2-search__field').type('{enter}')
    })

})