describe('Register', () => {
    it('testing register to application', () => {
      cy.visit('http://localhost:8080/register')
      cy.get('input#nameInput').type('q@wp.pl')
      cy.get('input#EmailInput').type('q@wp.pl')
      cy.get('input#PassInput').type('q@wp.pl')
      cy.get('input#ConfPassInput').type('q@wp.pl')
      cy.get('.btn').click();
    })
  })