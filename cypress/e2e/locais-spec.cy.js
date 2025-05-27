import loc from '../support/locators'

describe('Trabalhando com Locais', () => {
    const corporateName = 'Turma de Cypress'
    let nameLocal
    
    function getRandomInt() {
        return Math.floor(Math.random() * 100000);
    }

    beforeEach(() => {       
        nameLocal = 'Local da turma de Cypress - ' + getRandomInt()

        cy.visit('https://center.umov.me')
        cy.login('trindade', 'aluno01', 'alterasenha' )
        cy.get(loc.MENU.MENU_LOCAIS, {timeout: 10000}).click()

    })

    it('Deve criar um novo local', ()  => {
        cy.get(loc.LIST_LOCAL.BTN_ADD_LOCAL).click()
        cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).type(nameLocal)
        cy.get(loc.DETAIL_LOCAL.TF_CORPORATE_NAME).type(corporateName)
        cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

        //ação de pesquisa
        cy.search(nameLocal)

        cy.get(loc.LIST_LOCAL.LINE_ONE).should('contain', nameLocal)

    })

    describe('Deve editar um local', () => {
        beforeEach(() => {
            cy.get(loc.LIST_LOCAL.BTN_ADD_LOCAL).click()
            cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).type(nameLocal)
            cy.get(loc.DETAIL_LOCAL.TF_CORPORATE_NAME).type(corporateName)
            cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()
            cy.search(nameLocal)
            
        })

        it('Deve alterar a descrição do local', () => {
            const newDescription = nameLocal + ' - Editado'
            
            cy.get(loc.LIST_LOCAL.BTN_EDIT).click()
            cy.get(loc.DETAIL_LOCAL.TF_DESCRIPTION).clear().type(newDescription)
            cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

            //ação de pesquisa
            cy.search(newDescription)

            cy.get(loc.LIST_LOCAL.LINE_ONE).should('contain', newDescription)
        })

        it('Deve alterar o local para inativo', () => {
            cy.get(loc.LIST_LOCAL.BTN_EDIT).click()
            cy.get(loc.DETAIL_LOCAL.CHK_ACTIVE).uncheck()
            cy.get(loc.DETAIL_LOCAL.BTN_SAVE).click()

            cy.search(nameLocal)
            cy.get(loc.LIST_LOCAL.BODY_SECTION).contains('Nothing found to display.').should('be.visible')

        })
        
    })

})
