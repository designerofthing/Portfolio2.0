describe('User can see whole portfolio', () => {
  beforeEach(() => {
    cy.visit('/portfolio');
  })
  it('shows two portfolio options', () => {
    cy.get('#port-link-1').click();
    cy.wait(1000);
    cy.get('#wd-header').should('contain', 'WEB DEVELOPMENT');
    cy.go('back');
    cy.get('#port-link-2').click();
    cy.get('#products-header').should('contain', 'PRODUCT DESIGN');
  });
})
