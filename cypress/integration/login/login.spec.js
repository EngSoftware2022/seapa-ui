
describe('My First Test', function() {
     beforeEach(() => {
          cy.visit('http://localhost:4200/')
     })

     it('should be login', () => {
          cy.get('#user').type('aamgoulart');
          cy.get('#password').type('123senha');
          cy.get('#btnLogin').click()

     })

})