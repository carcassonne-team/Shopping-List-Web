describe('Logging', () => {
  it('testing logging to application', () => {
    cy.visit('http://localhost:8080/login')
    cy.get('input#EmailInput').type('q@wp.pl').should('have.value', 'q@wp.pl')
    cy.get('input#PassInput').type('q@wp.pl').should('have.value', 'q@wp.pl')
    cy.get('.btn').click();
  })
})