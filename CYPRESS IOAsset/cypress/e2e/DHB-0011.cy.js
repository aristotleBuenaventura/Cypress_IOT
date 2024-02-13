describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#txtUserId').type('dev08@iotphils.com');
    cy.get('#txtPassword').type('P@ssw0rd');

    cy.contains('Sign in').click();

    cy.get('#tblAssetList_next').click();
    cy.get('#tblAssetList_previous').click();
    cy.get('#tblAssetList_wrapper').contains('...').click();
    cy.get('.dt-button-collection').contains('EXCEL').click();
    cy.get('.dt-button-collection').contains('CSV').click();
    

  })
})