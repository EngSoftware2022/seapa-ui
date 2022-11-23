
describe('FAQ test', function() {
    beforeEach(() => {
        cy.visit('http://localhost:4200/faq')
    })

    it('should be back to home', () => {
        cy.get('#btnBack').click({force: true})
        // cy.url().should('http://localhost:4200/')

    })

})