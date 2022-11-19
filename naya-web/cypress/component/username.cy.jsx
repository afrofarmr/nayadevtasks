import React from 'react';
import {Container} from 'reactstrap';

describe('username', () => {
  it('contains correct username', () => {
    cy.mount(<Container>Username</Container>)  
    cy.get('.container').should('contains.text', 'Username')
  });
});