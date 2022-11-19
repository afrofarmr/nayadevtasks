/// <reference types = "Cypress" />

describe('Create Project', () => {
  it('should create and verify project', () => {
    cy.login()

    cy.get('.container > :nth-child(2) > .login-button').click()
    //verify create landing page
    cy.url().should('include', '/sketch')

    cy.get(':nth-child(1) > .form-control').type('createnaya')

    cy.get(':nth-child(3) > :nth-child(2) > .btn').click()
    cy.get(':nth-child(5) > .card > .row > .col-sm-6 > div').should('contains.text', 'Username')

  });
});