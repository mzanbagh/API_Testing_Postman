/// <reference types="Cypress" />


describe('Get Request', () => {
  var results
  it('Validate status of the post end-piont', () => {
      results = cy.request('https://catfact.ninja/fact')
      results.its('status').should('equal', 200)
  });
  it.only('Validate post request contains the correct key and values', () => {
    cy.request({
      method: 'GET',
      url: "https://catfact.ninja/fact",
      headers: {
        accept: "application/json"
      }
    }).then(response => {
      let body =JSON.parse(JSON.stringify(response.body))
      cy.log(body)
      expect(body).has.property("fact")
      let pageTitle = cy.title()
      cy.log(pageTitle)
    })
  });
});
