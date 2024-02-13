describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#txtUserId').type('dev08@iotphils.com');
    cy.get('#txtPassword').type('P@ssw0rd');

    cy.contains('Sign in').click();

    cy.get('#tblStockList_next').click();
    cy.get('#tblStockList_previous').click();
    cy.get('#tblStockList_wrapper').contains('...').click();
    cy.get('#tblStockList_wrapper').contains('EXCEL').click();
    cy.get('#tblStockList_wrapper').contains('CSV').click();

    

  })
})