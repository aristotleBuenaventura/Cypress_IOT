describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#txtUserId').type('dev08@iotphils.com')
    cy.get('#txtPassword').type('Password')

    cy.contains('Sign in').click()

    cy.get('#tblPropertyStatus_next').click()
    cy.get('#tblPropertyImportantSched_previous').click()
    
    


  })
})