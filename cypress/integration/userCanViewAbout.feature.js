describe('User can see the 3 sections of the About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  })
  it('shows three About options', () => {
    cy.get('#about-steve').click();
    cy.get('#steve').should('contain', "I'm Steve");
    cy.get('#about-skills').click();
    cy.get('#skills').should('contain', 'Skills');
    cy.get('#about-tech').click();
    cy.get('#tech').should('contain', 'Tech Abilities');
  });
})
