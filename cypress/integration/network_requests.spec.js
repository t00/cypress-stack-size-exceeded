/// <reference types="cypress" />

context('Network Requests', () => {
  it('cy.request() - make an XHR request', () => {
    // https://on.cypress.io/request
    cy.request('http://localhost:8080').then(r => {
      r.body.should('contain', 'Hello');
    })
  })
})
