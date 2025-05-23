describe('Validando elementos web', () => {

    beforeEach(() => {
        cy.visit('/elementsweb.html')
    })
   
    it('Validando o título da página', () => {       
        cy.title().should('contains', 'WebElements') 
        cy.title().should('equal', 'WebElements Test Page Lab') 
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

    it('Deveria validar o checkbox', () => {
        cy.get('input[type=checkbox]').first().check().should('be.checked')
        cy.get('input[type=checkbox]').check('Check 2').should('be.checked')
        cy.get('input[type=checkbox]').check(['Check 3', 'Check 4']).should('be.checked')

        cy.get('input[type=checkbox]').uncheck('Check 2').should('not.be.checked')
        cy.get('input[type=checkbox]').uncheck( {multiple: true} ).should('not.be.checked')
    })

    it('Deveria validar o select single', () => {
        cy.get('select[name=dropdownlist]').select('Item 4').should('have.value', 'item4')
        
        //Pegando o texto de um option
        cy.get('select[name=dropdownlist]').select(0).find(':selected')
            .invoke('text')
            .should('eq', 'Item 1')

        //Pegando o valor de um option
        cy.get('select[name=dropdownlist]').select(1).find(':selected')
            .invoke('val')
            .should('eq', 'item2')

        cy.get('select[name=dropdownlist] option').should('have.length', 10)
        cy.get('select[name=dropdownlist] option').should('have.length.greaterThan', 9)
        cy.get('select[name=dropdownlist] option').eq(0).should('have.value', 'item1')
        
        cy.get('select[name=dropdownlist] option').then($options => {
            const values = []
            $options.each(function() {
                values.push(this.innerText)
            })

            expect(values).to.include.members(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'])
        })

    })

    it('Deveria validar o select multiple', () => {
        cy.get('select[name=multiselectdropdown]').select(['Item 1', 'Item 4', 'Item 9'])
        
        cy.get('select[name=multiselectdropdown]').then($list => {
            expect($list.val()).to.be.deep.equal(['item1', 'item4', 'item9'])
            expect($list.val()).to.have.length(3)
        })
        
    })

    it('Trabalhando com wrap (empacotar em objetos Cypress', () => {
        cy.get('[name=txtbox1]').then($tfbox1 => {  
            cy.wrap($tfbox1).type('Antônio Trindade').should('have.value', 'Antônio Trindade')
            
            
            // $tfbox1.val('Antônio Trindade')
            // expect($tfbox1).to.have.value('Antônio Trindade')
        })


    })

    

})
