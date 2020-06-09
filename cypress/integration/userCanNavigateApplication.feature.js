describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("to About tab and link", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
    });

    it("displays About page", () => {
      cy.get("#about-header").should("contain", "ABOUT");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "about");
    });

    it("does not display Portfolio", () => {
      cy.get("#portfolio-header").should("not.exist");
    });

    it("does not display logo", () => {
      cy.get("#logo").should("not.exist");
    });

    it("does not display Contact", () => {
      cy.get("#contact-header").should("not.exist");
    });
  });

  describe("to Portfolio tab and link", () => {
    beforeEach(() => {
      cy.get("#portfolio-tab").click();
    });

    it("displays Portfolio page", () => {
      cy.get("#portfolio-header").should("contain", "PORTFOLIO");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "portfolio");
    });

    it("does not display About", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display logo", () => {
      cy.get("#logo").should("not.exist");
    });

    it("does not display Contact", () => {
      cy.get("#contact-header").should("not.exist");
    });
  });

  describe("to Contact tab and link", () => {
    beforeEach(() => {
      cy.get("#contact-tab").click();
    });

    it("displays Contact page", () => {
      cy.get("#contact-header").should("contain", "CONTACT");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "contact");
    });

    it("does not display About", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display Portfolio", () => {
      cy.get("#portfolio-header").should("not.exist");
    });

    it("does not display logo", () => {
      cy.get("#logo").should("not.exist");
    });
  });

  describe("back to Main Page/Logo tab and it", () => {
    beforeEach(() => {
      cy.visit("/about");
      cy.get("#small-logo").click();
    });

    it("displays logo image", () => {
      cy.get("#logo").should("be.visible");
    });

    it("displays correct url", () => {
      cy.url()
        .should("not.contain", "portfolio")
        .and("not.contain", "about")
        .and("not.contain", "contact");
    });

    it("does not display About", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display Portfolio", () => {
      cy.get("#portfolio-header").should("not.exist");
    });

    it("does not display Contact", () => {
      cy.get("#contact-header").should("not.exist");
    });
  });
});
