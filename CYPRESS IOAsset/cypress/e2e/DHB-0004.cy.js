describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('#txtUserId').type('dev08@iotphils.com');
    cy.get('#txtPassword').type('P@ssw0rd');

    cy.contains('Sign in').click();

    cy.contains('Property Status').scrollIntoView();
    
    cy.get('#select2-ddlStatusType-container').click();
    cy.get('.select2-results__option').contains('Pie Graph').click();

    cy.get('#select2-ddlStatusType-container').click();
    cy.get('.select2-results__option').contains('Bar Graph').click();

    cy.get('#select2-ddlStatusType-container').click();
    cy.get('.select2-results__option').contains('Table').click();

    // cy.get('#tblPropertyStatus_next').click()
    // cy.get('#tblPropertyStatus_previous').click()
  });
});
