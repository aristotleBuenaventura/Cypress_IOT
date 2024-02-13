describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#txtUserId').type('dev08@iotphils.com');
    cy.get('#txtPassword').type('P@ssw0rd');

    cy.contains('Sign in').click();

    cy.contains('System').click();
    cy.visit('https://192.168.110.155:46800/System/Miscellaneous.aspx')


    
  })
})