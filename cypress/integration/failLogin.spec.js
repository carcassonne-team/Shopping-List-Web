describe('Logging fail', () => {
    it('testing logging fail', () => {
      cy.visit('http://localhost:8080/login')
      cy.get('input#EmailInput').type('zlylogin@wp.pl').should('have.value', 'zlylogin@wp.pl')
      cy.get('input#PassInput').type('złehasło').should('have.value', 'złehasło')
      cy.get('.btn').click();
    })
  })