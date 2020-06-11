describe('User can see the 3 sections of the About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  })
  it('shows three About options', () => {
    cy.get('#about-steve').click();
    cy.get('#steve').should('contain', 'about Steve');
    cy.get('#about-skills').click();
    cy.get('#skills').should('contain', 'skills');
    cy.get('#about-cv').click();
    cy.get('#cv').should('contain', 'Cirriculum Vitae');
  });
})
