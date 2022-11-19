// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {  cy.visit('http://localhost:3000/')

cy.get(':nth-child(3) > .col-sm-12 > .form-control').type('hello')

cy.get(':nth-child(4) > .col-sm-12 > .form-control').type('welcome123')

cy.get('.col-sm-12 > div > button').click()
cy.get('#rc-editable-input-2').clear().type('#2AD057')

cy.get('[style="position: fixed; inset: 0px;"]').click()

cy.get('.login-button').contains('Login').click({force:true});

//verify landing page
cy.url().should('include', '/explore')
})