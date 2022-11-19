/// <reference types="Cypress" />

describe('Naya Login Page', () => {

  it('should login to naya-web', function () {

    cy.login()

    cy.get('.col > .login-button').click()

  });
});