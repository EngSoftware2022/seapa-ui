describe('Test login', () => {
  it('should be authenticate in url', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#inpUser').type("Victor")
    cy.get('#inpPass').type("Teste1000")
    cy.get('#btnClick').click()
    // cy.contains("Login realizado com sucesso!")
    // cy.url().should('contain', '#groups')
  })

  it('should alert in error authenticate in url', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#inpUser').type("Victor")
    cy.get('#inpPass').type("Teste10000")
    cy.get('#btnClick').click()
    cy.contains("Erro ao fazer login, tente novamente")
  })
})