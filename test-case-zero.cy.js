/// <reference types="Cypress" />

  beforeEach(() => {
    cy.visit('https://pricingsite.com/login');
    // Assuming I need to be logged in to use app
    cy.get('user@beverage.com').type(email);
    cy.get('P4ssw0rd').type(password);
  })

  context("Beverage Pricing", () => {
    it('Valid customer with 0 products in order', () => {
      cy.visit('https://pricingsite.com/calculate');
      cy.get('#products-input').type('1 0 0 0 0');
      cy.get('button').contains('Submit').click()

      // Assuming that the output will return in multiple elements 
      // inside an element with class result. Also asumming each line will have
      // another class that can be used to identify each one.
      cy.get('.result .product-A').should('contain', '0 0.94 0');
      cy.get('.result .product-B').should('contain', '0 1.09 0');
      cy.get('.result .product-C').should('contain', '0 0.78 0');
      cy.get('.result .product-D').should('contain', '0 1.44 0');
      cy.get('.result .subtotal').should('contain', '0');
      cy.get('.result .total').should('contain', '0');
    })
  })