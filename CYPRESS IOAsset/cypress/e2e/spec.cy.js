describe('My First Test', () => {

  it('Gets, types and asserts', () => {
    cy.visit('/')
    // Get an input, type into it
    cy.get('#txtUserId').type('MLaurente')
    cy.get('#txtPassword').type('6*fXkR+3')

    cy.contains('Sign in').click()

    cy.url().should('include', '/')

    

    // //  Verify that the value has been updated
    // cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})