describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    // Get an input, type into it
    cy.get('#txtUserId').type('dev08@iotphils.com')
    cy.get('#txtPassword').type('P@ssw0rd')

    cy.contains('Sign in').click()
  })
})