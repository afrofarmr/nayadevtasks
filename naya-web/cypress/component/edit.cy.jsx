import React from 'react';
import {Button} from 'reactstrap';


describe('Edit', () => {
  it('uses custom text for the button label', () => {
    cy.mount(<Button>Edit</Button>)
    cy.get('button').should('contains.text', 'Edit')
  });
});