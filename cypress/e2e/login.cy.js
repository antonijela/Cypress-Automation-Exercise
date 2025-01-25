it('user can login with valid credentials', function(){
    cy.visit('')
    cy.get('[href="/login"]').click()
    cy.url().should('eq', 'https://www.automationexercise.com/login')
    
})