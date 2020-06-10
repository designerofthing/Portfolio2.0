describe('User can see the 3 sections of the About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  })
  it('shows three About options', () => {
    cy.get('#about-steve').click();
    cy.get('#steve').should('contain', 'About Steve');
    cy.go('back');
    cy.get('#about-skills').click();
    cy.get('#hardskills').should('contain', 'Hard Skills');
    cy.go('back');
    cy.get('#about-soft').click();
    cy.get('#softskills').should('contain', 'Soft Skills');
  });
})
