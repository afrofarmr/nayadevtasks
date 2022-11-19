/// <reference types="Cypress" />

describe('View Project', () => {

  it('view existing project', function () {

    cy.login()

    cy.get(':nth-child(5) > .card > .row > .col-sm-6 > .login-button').click()
    cy.url().should('include', '/edit')

    cy.get('select').select('circle')
    cy.get('select').should('have.value', 'circle')

    cy.get('[label="Text"]').type('proper communication is priority')
    cy.get('[color="primary"]').click()
    

  });
});