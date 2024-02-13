describe('template spec', () => {
  it('passes', () => { 
    LP_0001();
    LP_0002();
    LP_0003();
    LP_0006();
  })
})



function LP_0001(){
  cy.visit('https://192.168.110.155:46800/Login.aspx/')
}

function LP_0002(){
  Account_Login();
  Account_Logout();
}

function LP_0003(){
  Account_Login();

  cy.get('#tblPropertyStatus_next').click()
  cy.get('#tblPropertyImportantSched_previous').click()
  Account_Logout();
}

function LP_0006(){
  cy.get('#txtUserId').type('dev08@iotphils.com')
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

}

function Account_Login(){
    cy.visit('/')
    // Get an input, type into it
    cy.get('#txtUserId').type('dev08@iotphils.com')
    cy.get('#txtPassword').type('P@ssw0rd')

    cy.contains('Sign in').click()
}

function Account_Logout(){
  cy.get('#dpname').click();
  cy.get('.pull-right a').click();
}

