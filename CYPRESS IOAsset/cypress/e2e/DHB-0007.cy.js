describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('#txtUserId').type('dev08@iotphils.com');
    cy.get('#txtPassword').type('P@ssw0rd');

    cy.contains('Sign in').click();

    cy.get('#BodyHolder_divGRforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divPropertyIssuanceforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divPropertyRequestforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divPropertyTransferforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divPropertyDisposalforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divPropertyGatePassforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divStockRequestforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divUploadedFileforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divDatabaseRestoreforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divStockDisposalforApproval').click();
    cy.visit('/Home/Dashboard.aspx');
    cy.get('#BodyHolder_divStockIssuanceforApproval').click();

    
  })
})