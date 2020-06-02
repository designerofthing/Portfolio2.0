describe('User can navigate the app', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000');
  })

  describe('to About tab and link', () => {
      beforeEach(() => {
          cy.get('#about-tab').click();
      });

      it('displays About page', () => {
          cy.get('#about').should('contain', 'About');
      });

      it('displays component name in url', () => {
          cy.url().should('contain', 'about');
      });

      it('does not display Portfolio', () => {
          cy.get('#portfolio').should('not.exist');
      });

      it('does not display logo', () => {
          cy.get('#logo').should('not.exist');
      });

      it('does not display Contact', () => {
          cy.get('#contact').should('not.exist');
      });
  });

  describe('to Portfolio tab and link',() => {
      beforeEach(() => {
          cy.get('#portfolio-tab').click();
      });

      it('displays Portfolio page', () => {
          cy.get('#portfolio').should('contain', 'Portfolio');
      });

      it('displays component name in url', () => {
          cy.url().should('contain', 'portfolio');
      });

      it('does not display About', () => {
          cy.get('#about').should('not.exist');
      });

      it('does not display logo', () => {
          cy.get('#logo').should('not.exist');
      });

      it('does not display Contact', () => {
          cy.get('#contact').should('not.exist');
      });
  });
    
  describe('to Contact tab and link', () => {
      beforeEach(() => {
          cy.get('#contact').click();
      });

      it('displays Contact page', () => {
          cy.get('#contact').should('contain', 'Contact');
      });

      it('displays component name in url', () => {
          cy.url().should('contain', 'contact');
      });

      it('does not display About', () => {
          cy.get('#about').should('not.exist');
      });

      it('does not display Portfolio', () => {
          cy.get('#portfolio').should('not.exist');
      });

      it('does not display logo', () => {
          cy.get('#logo').should('not.exist');
      });
  });

  describe('back to Main Page/Logo tab and it', () => {
      beforeEach(() => {
          cy.get('#about').click();
          cy.get('#header').click();
      });

      it('displays logo image', () => {
          cy.get('#logo').should('be.visible');
      });

      it('displays correct url', () => {
          cy.url()
          .should('not.contain', 'portfolio')
          .and('not.contain', 'about')
          .and('not.contain', 'contact');
      });

      it('does not display About', () => {
          cy.get('#about').should('not.exist');
      });

      it('does not display Portfolio', () => {
          cy.get('#portfolio').should('not.exist');
      });

      it('does not display Contact', () => {
          cy.get('#contact').should('not.exist');
      });
  });    
});