describe('Todo List', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })       
    
    it('Deveria adicionar um todo', () => {
        cy.get('[data-test="new-todo"]').type('Buy milk{enter}')

        cy.get('.todo-list').contains('Buy milk').should('be.visible') 
        cy.get('.todo-list li').should('have.length', 3)
    })

    describe('Testes que consideram que uma tarefa já está adicionada', () => {

        beforeEach(() => {
            cy.get('[data-test="new-todo"]').type('Buy milk{enter}')
        })

        it ('Deveria marcar um todo como completo', () => {
            cy.get('.todo-list').contains('Buy milk').parent().find('.toggle').check()
            cy.get('.filters').contains('Completed').click()
            cy.get('.todo-list').contains('Buy milk').should('be.visible')
            cy.get('.todo-list li').should('have.length', 1)
        })

        it('Deveria remover o todo completo', () => {
            cy.get('.todo-list').contains('Buy milk').parent().find('.toggle').check()
            cy.get('.todo-list').contains('Buy milk')
                .parent().find('.destroy').invoke('show').click()

            cy.get('.todo-list li')
                .should('have.length', 2)
                .should('not.contain', 'Buy milk')
        })

    })
})