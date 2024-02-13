describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#txtUserId').type('aristotlecortezbuenaventura@gmail.com')
    cy.get('#txtPassword').type('Password123')

    cy.contains('Sign in').click()

    cy.get('#txtPassword').type('Password12')

    cy.contains('Sign in').click()

    cy.get('#txtPassword').type('Password1')

    cy.contains('Sign in').click()

    cy.get('#txtPassword').type('Password')

    cy.contains('Sign in').click()

    cy.get('#txtPassword').type('Passwor')

    cy.contains('Sign in').click()
  })
})