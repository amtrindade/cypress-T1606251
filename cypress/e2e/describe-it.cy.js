describe('Describe 1', () => {

    before(() => {
        cy.log('Before all')
    })

    beforeEach(() => {
        cy.log('Before each')
    })

    it('Teste 1', () => {
        cy.log('Teste 1')
    })

    it ('Teste 2', () => {
        cy.log('Teste 2')
    })

    it ('Teste 3', () => {
        cy.log('Teste 3')
    })
})

describe('Describe 2', () => {

    it('Teste 4', () => {
        cy.log('Teste 4')
    })

    it ('Teste 5', () => {
        cy.log('Teste 5')
    })

    it ('Teste 6', () => {
        cy.log('Teste 6')
    })

    describe('Describe 3', () => {
        beforeEach(() => {
            cy.log('Before each describe 3')
        })

        it('Teste 7', () => {
            cy.log('Teste 7')
        })
    })
})
