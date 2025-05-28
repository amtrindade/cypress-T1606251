// https://github.com/ServeRest/ServeRest
// https://serverest.dev/

describe('API Tests', () => {
    
    function getRandomInt() {
        return Math.floor(Math.random() * 100000);
    }

    it('GET usuários', () => {
        cy.request({
            url: 'https://serverest.dev/usuarios',
            method: 'GET',
        }).as('getUsers')
       
        cy.get('@getUsers').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.quantidade).to.be.greaterThan(17)
            expect(response.body.usuarios).to.be.an('array')
            expect(response.body.usuarios[0]).to.have.property('nome')
            expect(response.body.usuarios[0]).to.have.property('email')
        })
    })

    it('GET usuário específico', () => {
        cy.request({
            url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpEz1',
            method: 'GET',
        }).as('getUserById')

        cy.get('@getUserById').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.nome).to.eq('Fulano da Silva')
            expect(response.body.email).to.eq('fulano@qa.com')
        })
    })

    it('POST criar usuário', () => {
        cy.request({
            url: 'https://serverest.dev/usuarios',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                nome: 'João da Silva',
                email: 'targettrust-'+  getRandomInt() + '@target.com.br',
                password: "teste",
                administrador: "true"
            }
        }).as('createUser') 

        cy.get('@createUser').then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq('Cadastro realizado com sucesso')
            expect(response.body._id).to.exist
        })
    })
})