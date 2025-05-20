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

   it('Deveria validar textfield estão habilitados', () => {
        cy.get('[name=txtbox1]')
            .should('be.enabled')
            .type('Hello World')
            .should('have.value', 'Hello World')

        cy.get('[name=txtbox2]')
            .should('be.disabled')
            .type('Hello World', {force: true})
            .should('have.value', 'Hello World')

   })

   it('Deveria validar o label TextField', () => {

        cy.get('form > :nth-child(1) > .text-muted').should('have.text', 'TextField:')

    })

    it('Deveria validar o radio group', () => {
        cy.get('input[name=radioGroup1]')
            .should('have.length', 4)
        cy.get('input[name=radioGroup1]')
            .check('Radio 2')
            .should('be.checked')
        cy.get('input[name=radioGroup1]').first().check().should('be.checked')
        cy.get('input[name=radioGroup1]').last().check().should('be.checked')
        cy.get('input[name=radioGroup1]').eq(2).check().should('be.checked')
        cy.get('input[name=radioGroup1]').eq(3).should('not.be.checked')

        cy.get('input[name=radioGroup1]').check().should('be.checked')

    })
})
