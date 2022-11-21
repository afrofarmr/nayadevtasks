/// <reference types="Cypress" />

describe('Naya Login Page', () => {

  it('should login to naya-web', function () {

    cy.login()

    cy.get('.col > .login-button').click()
    cy.get(':nth-child(2) > .col-md-6').should('contains.text', 'Login')

  });
});