describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.contains('Forgot Password').click()

    cy.get('#InputEmail1').type('dev08@iotphils.com')
    
  })
})