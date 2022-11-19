/// <reference types="Cypress" />

describe('frontend(e2e)', () => {
  it('should visit nayaapp', () => {
    cy.visit('http://localhost:3000/')
  });
});