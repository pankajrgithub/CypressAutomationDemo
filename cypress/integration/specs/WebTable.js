/// <reference types="cypress"/> 
describe('Web Table',function(){
     
    it('Table data validation',function(){
     
        cy.visit('https://testautomationpractice.blogspot.com/')

        //check value present in a table 'Learn Selenium'
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //verify value present spesific row and coulmn 

        cy.get('table[name=BookTable]> tbody> tr:nth-child(2) > td:nth-child(3)').contains('Selenium')
        .should('be.visible')

        //verify the book name who's author is Amod

        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e,index,$list) => {
                                                //index represent the row
                                                //$e -single element
            const text=$e.text()

            if(text.includes('Amod')){
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){
                    const bookname=bname.text()

                    expect(bookname).to.equal('Master In Java')
                })
            }
        })


    })

   })