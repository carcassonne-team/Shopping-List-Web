describe('Remove List', () => {
    it('testing removing list', () => {
      cy.visit('http://localhost:8080/login')
      cy.get('input#EmailInput').type('q@wp.pl').should('have.value', 'q@wp.pl')
      cy.get('input#PassInput').type('q@wp.pl').should('have.value', 'q@wp.pl')
      cy.get('.btn').click();
  
      cy.wait(2000);
  
      cy.visit('http://localhost:8080/lists')
      cy.wait(1000);
      cy.get('#dropdownMenuButton1').click()
      cy.get('#page-content-wrapper > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > ul > li:nth-child(3) > a').click()
    })
  })