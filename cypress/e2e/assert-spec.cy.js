import 'cypress-mochawesome-reporter/register';

describe('Trabahando com Asserts', () => {
    
    it('Trabalhando com Integer', () => {
        const num = 5

        expect(num).to.be.equal(5)
        expect(num).to.be.not.equal(20)

        expect(num).to.be.greaterThan(4)
        expect(num).to.be.lessThan(6)

    })

    it('Trabando com Strings', () => {

        const name = 'Automação de Testes com Cypress'
      
        expect(name).to.be.equal('Automação de Testes com Cypress')
        expect(name).to.be.not.equal('Automação de Testes com WebDriver')

        expect(name).to.have.length(31)
        expect(name).to.have.lengthOf(31)

        expect(name).to.include('Cyp')
        expect(name).to.contains('Cypress')

        //Expressões regulares
        expect(name).to.match(/Cypress/)
        expect(name).to.match(/\D{31}/)
    })
    
    it('Trabalhando com boolean', () => {
        const boolean = true

        expect(boolean).to.be.true
        expect(boolean).to.be.not.false

        expect(boolean).to.be.ok
        expect(boolean).to.be.not.null
    })

    it('Trabalhando com float', () => {
        const num = 5.5789445646

        expect(num).to.be.equal(5.5789445646)
        expect(num).to.be.closeTo(5.57, 0.01)

    })

    it('Trabalhando com Array', () => {
        const arr = [1, 2, 3, 4, 5]
        const arr2 = ['curso', 'automação', 'cypress']

        expect(arr).to.be.an('array')
        expect(arr).to.have.length(5)
        expect(arr).to.include(4)
        expect(arr).to.not.include(6)
        expect(arr).to.have.members([ 2, 3, 5, 4, 1])

        expect(arr2).to.be.an('array')
        expect(arr2).to.have.length(3)
        expect(arr2).to.include('curso')
        expect(arr2).to.be.include.members(['curso', 'automação']) 
    })
    
    it('Trabalhando com Objetos', () => {
        const aluno = {
            name: 'Vanessa Saldanha',
            age: 26,
            city: 'Porto Alegre'
        }

        expect(aluno).to.be.an('object')
        expect(aluno).to.have.property('name', 'Vanessa Saldanha')
        
        const aluno2 = {
            name: 'Vanessa Saldanha',
            age: 26,
            city: 'Porto Alegre'
        }
        //Deep - Compara o conteúdo de dois objetos diferentes
        expect(aluno).to.be.deep.equal(aluno2)

    })

})