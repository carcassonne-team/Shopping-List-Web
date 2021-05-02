describe('Add Product', () => {
  it('testing logging to application', () => {
    cy.visit('http://localhost:8080/login')
    cy.get('input#EmailInput').type('q@wp.pl')
    cy.get('input#PassInput').type('q@wp.pl')
    cy.get('.btn').click();
    setTimeout(() => {
      const listNumber = 21;
      cy.visit('http://localhost:8080/lists/' + listNumber)
      cy.get('input.form-check-input')
    }, 2000);
  })

    
  })