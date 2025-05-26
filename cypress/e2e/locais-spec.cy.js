import loc from '../support/locators'

describe('Trabalhando com Locais', () => {
    
    const corporateName = 'Turma de Cypress'
    const randomNum = Math.floor(Math.random() * 1000)
    let nameLocal = 'Local da turma de Cypress - ' + randomNum

    beforeEach(() => {
        cy.visit('https://center.umov.me')
        cy.login('trindade', 'aluno01', 'trocarsenha' )
        cy.get(loc.MENU.MENU_LOCAIS, {timeout: 10000}).click()

    })

    it('Deve criar um novo local', ()  => {

        cy.get('#addServiceLocal').click()
        cy.get('#serviceLocal_description').type(nameLocal)
        cy.get('#serviceLocal_corporateName').type(corporateName)
        cy.get('#formServiceLocal_doSave').click()



    })

})
