describe('Create list', () => {
    it('testing Creating list', () => {
      cy.visit('http://localhost:8080/login')
      cy.get('input#EmailInput').type('q@wp.pl').should('have.value', 'q@wp.pl')
      cy.get('input#PassInput').type('q@wp.pl').should('have.value', 'q@wp.pl')
      cy.get('.btn').click();
  
      cy.wait(2000);
  
      cy.visit('http://localhost:8080/lists')
      cy.wait(1000);
      cy.get('.fa-plus-circle').click()
      cy.get('#exampleModal input.inputList').type('testowa lista')
      cy.get('#exampleModal button.btn').click();
  
      cy.get('body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled').click();
      cy.get('#exampleModal > div > div > div.modal-header > button').click();
    })
  })