/* global cy */
export{}

describe('Testing cleverpy pots system', () => {
  it('Testing acces login to get home acces', () => {
    cy.visit('http://localhost:3000');

      cy.url().should('include', '/login');

      cy.get("[type='email']")
      .type('fernando@cleverpy.com')
      .should('have.value', 'fernando@cleverpy.com')
      
      cy.get("[type='password']")
      .type('12345')
      .should('have.value', '12345')

      cy.get("[type='submit']").click();

      cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Testing acces fail login stay in login page', () => {
    cy.visit('http://localhost:3000');

      cy.url().should('include', '/login');

      cy.get("[type='email']")
      .type('fernando@cleverpy-fail.com')
      .should('have.value', 'fernando@cleverpy-fail.com')
      
      cy.get("[type='password']")
      .type('123456')
      .should('have.value', '123456')

      cy.get("[type='submit']").click();

      cy.url().should('eq', 'http://localhost:3000/login')
  })
})