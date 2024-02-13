describe('My First Test', () => {

  it('Gets, types and asserts', () => {
    cy.visit('/')
    // Get an input, type into it


    cy.contains('Forgot Password').click()
    cy.get('#InputEmail1').type('testsssssssssss@gmail.com')
    cy.contains('Next').click()

    

    // //  Verify that the value has been updated
    // cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})