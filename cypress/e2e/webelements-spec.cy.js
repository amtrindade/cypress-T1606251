describe('Validando elementos web', () => {

    beforeEach(() => {
        cy.visit('/elementsweb.html')
    })
   
    it('Validando o título da página', () => {       
        cy.title().should('contains', 'WebElements') 
        cy.title().should('eq', 'WebElements Test Page Lab') 
    })

   it('Deveria escrever o nome e validar no textfield', () => {
        //Localiza o elemento
        //Preenche o campo de texto
        //Valida o valor do campo de texto             
        cy.get('[name=txtbox1]').type('Antônio Trindade').should('have.value', 'Antônio Trindade')

   })
})
