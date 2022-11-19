/// <reference types="Cypress" />

describe('View Project', () => {

  it('view existing project', function () {

    cy.login()
    cy.get(':nth-child(1) > .card > .row > .col-sm-6 > .login-button').click()
    cy.url().should('include', '/edit')

    

  });
});