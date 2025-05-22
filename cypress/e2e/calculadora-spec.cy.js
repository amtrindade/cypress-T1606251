const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

describe('Calculadora', () => {

    beforeEach(() => {
        cy.visit('/desafiosoma.html')        
    })

    sizes.forEach((size) => {
        it('Deveria somar dois números', () => {

            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
        }
            
            cy.get('#number1').type(2)
            cy.get('#number2').type(3)
            cy.get('#somar').click()
            //cy.wait(10000)
            cy.get('#total', {timeout: 10000}).should('have.value', '5')
        })
    })

})