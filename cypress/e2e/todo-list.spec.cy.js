describe('Todo List', () => {

    const task = 'Buy bread'

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })       
    
    it('Deveria adicionar um todo', () => {
        cy.get('[data-test="new-todo"]').type(`${task}{enter}`)

        cy.get('.todo-list').contains(`${task}`).should('be.visible') 
        cy.get('.todo-list li').should('have.length', 3)
    })

    describe('Testes que consideram que uma tarefa já está adicionada', () => {

        beforeEach(() => {
            cy.get('[data-test="new-todo"]').type(`${task}{enter}`)
        })

        it ('Deveria marcar um todo como completo', () => {
            cy.get('.todo-list').contains(`${task}`).parent().find('.toggle').check()
            cy.get('.filters').contains('Completed').click()
            cy.get('.todo-list').contains(`${task}`).should('be.visible')
            cy.get('.todo-list li').should('have.length', 1)
        })

        it('Deveria remover o todo completo', () => {
            cy.get('.todo-list').contains(`${task}`).parent().find('.toggle').check()
            cy.get('.todo-list').contains(`${task}`)
                .parent().find('.destroy').invoke('show').click()

            cy.get('.todo-list li')
                .should('have.length', 2)
                .should('not.contain', `${task}`)
        })

    })
})