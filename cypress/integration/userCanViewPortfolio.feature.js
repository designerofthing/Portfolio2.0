describe('User can see whole portfolio', () => {
  beforeEach(() => {
    cy.visit('/portfolio');
  })
  it('shows two portfolio options', () => {
    cy.get('#portfolio-webdev').click();
    cy.get('#wd-header').should('contain', 'WEB DEVELOPMENT');
    cy.go('back');
    cy.get('#portfolio-products').click();
    cy.get('#products-header').should('contain', 'PRODUCT DESIGN');
  });
})
