describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('#txtUserId').type('dev08@iotphils.com');
    cy.get('#txtPassword').type('P@ssw0rd');

    cy.contains('Sign in').click();

    cy.get('#BodyHolder_divgrdetails').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divissuancedetails').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divtransferdetails').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divrequestdetails').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divreturndetails').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divdisposedetails').click();
    cy.visit('/Home/Dashboard.aspx');

  })
})