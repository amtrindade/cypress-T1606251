describe('Trabahando com Asserts', () => {
    
    it('Trabalhando com Integer', () => {
        const num = 5

        expect(num).to.be.equal(5)
        expect(num).to.be.not.equal(20)

        expect(num).to.be.greaterThan(4)
        expect(num).to.be.lessThan(6)

    })



})