/// <reference types="Cypress" />

describe('Naya Login Page', () => {

  it('should login to naya-web', function () {

    cy.visit('http://localhost:3000/')

    cy.get(':nth-child(3) > .col-sm-12 > .form-control').type('hello')

    cy.get(':nth-child(4) > .col-sm-12 > .form-control').type('welcome123')

    cy.get('.col-sm-12 > div > button').click()
    cy.get('#rc-editable-input-2').clear().type('#2AD057')

    cy.get('[style="position: fixed; inset: 0px;"]').click()

    cy.get('.login-button').contains('Login').click({force:true});

    //verify landing page
    cy.url().should('include', '/explore')

  });
});