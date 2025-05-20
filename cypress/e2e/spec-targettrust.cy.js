describe('Testes validação da home', () => {
  
  
  it('Deve validar o título da página', () => {
    
    cy.visit('/')
    cy.title().should('eq', 'Treino Automação de Testes')

  })


})