describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#txtUserId').type('dev08@iotphils.com');
    cy.get('#txtPassword').type('P@ssw0rd');

    cy.contains('Sign in').click();

    cy.contains('User Management').click();
    // cy.contains('User').click();
    cy.visit('/User_Management/User.aspx');
    cy.get('#btnAdd').click();
    cy.get('#txtFirstName').type('Carlos');
    cy.get('#txtLastName').type('Reyes');
    cy.get('#txtEmployeeNo').type('LAPD098701');
    cy.get('.select2-search__field').type('Software Development{enter}')


    // cy.get('#ddlDepartment').select('2');
    // cy.get('#select2-results__options li:last-child').click();


// Click on the first option
// cy.get('#select2-ddlDepartment')
//   .find('.select2-results__option')
//   .first()
//   .click();
    // cy.get('#select2-ddlDepartment-container').click();
    // cy.get('.select2-results .select2-results__options-menu').first().click();
    // // cy.get('treeview-menu').first().should('have.text', 'User').click();
  })
})