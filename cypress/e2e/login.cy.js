it('user can login with valid credentials', function(){
    cy.visit('')
    cy.get('[href="/login"]').click()
    cy.url().should('eq', 'https://www.automationexercise.com/login')
    cy.get('[data-qa="login-email"]').type(Cypress.env('validEmail'))
    cy.get('[data-qa="login-password"]').type(Cypress.env('validPassword'))
    cy.get('[data-qa="login-button"]').click()

})

it.only('user cannot login with invalid credentials', function(){
    cy.fixture('invalid_login_data').then((data) => {
        data.invalidCredentials.forEach((credentials)=>{
            cy.visit('')
            cy.get('[href="/login"]').click()
            cy.url().should('eq', 'https://www.automationexercise.com/login')
            cy.get('[data-qa="login-email"]').type(credentials.email)
            cy.get('[data-qa="login-password"]').type(credentials.password)
            cy.get('[data-qa="login-button"]').click()
            cy.url().should('eq', 'https://www.automationexercise.com/login')
            cy.get('[data-qa="login-button"]').should('be.visible')
        })
        
    })
})



