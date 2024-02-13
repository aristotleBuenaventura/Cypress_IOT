describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('#txtUserId').type('dev08@iotphils.com');
    cy.get('#txtPassword').type('P@ssw0rd');

    cy.contains('Sign in').click();

    cy.get('#BodyHolder_divOpenInventoryCount').click();
  })
})