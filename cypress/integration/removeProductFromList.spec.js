describe('Remove product from list', () => {
  it('testing Removing product from list', () => {
    cy.visit('http://localhost:8080/login')
    cy.get('input#EmailInput').type('q@wp.pl').should('have.value', 'q@wp.pl')
    cy.get('input#PassInput').type('q@wp.pl').should('have.value', 'q@wp.pl')
    cy.get('.btn').click();

    cy.wait(2000);

    cy.visit('http://localhost:8080/lists/5')
    cy.wait(1000);
    cy.get('#page-content-wrapper > div > div > div.card.m-auto.mt-3 > ul > li:nth-child(1) > form > select')
    .select('Potato')
  })
})