describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#txtUserId').type('dev08@iotphils.com');
    cy.get('#txtPassword').type('P@ssw0rd');

    cy.contains('Sign in').click();

    cy.visit('https://192.168.110.155:46800/System/Miscellaneous.aspx');
    cy.contains('Bulletin Setting').dblclick();
    cy.get('input[type=file]').selectFile('test.jpg')



    // cy.get('input[type="file"]').attachFile('your-image.jpg');
  })
})