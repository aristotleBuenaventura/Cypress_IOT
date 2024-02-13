describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#txtUserId').type('dev08@iotphils.com')
    cy.get('#txtPassword').type('P@ssw0rd')

    cy.contains('Sign in').click()


    cy.get('.right.carousel-control').click();
    cy.get('.left.carousel-control').click();
    cy.get('.left.carousel-control').click();
    cy.get('.left.carousel-control').click();
    cy.get('.left.carousel-control').click();
    cy.get('.left.carousel-control').click();

  })
})