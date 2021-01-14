

describe("get 1test data ", () => {

    it(`@Get /posts/1`, () => {
      cy.request({
        method: "GET",
        url: `/posts/1`,
        headers: {
          Authorization: `Bearer ${Cypress.env('token')}`,
          Accept: "application/json",
          ContentType: "application/json",
        }
      }).then((response)=>{
          expect(response.status).equal(200);
  
      });
    });
  });
  