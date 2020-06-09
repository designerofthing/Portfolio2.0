describe('User can see whole portfolio', () => {
  beforeEach(() => {
    cy.visit('/portfolio');
  })
  it('shows two portfolio options', () => {
    cy.get('#web-dev').click();
    cy.get('#wd-header').should('contain', 'Web Development');
    cy.go('back');
    cy.get('#products').click();
    cy.get('#products-header').should('contain', 'Product Design');
  });
})
