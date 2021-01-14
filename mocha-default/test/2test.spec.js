const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
require("dotenv").config();

const api = chai.request(process.env.URL); // response base url


  describe("2", function () {
    it("Success", function (done) {
      api
        .get("/posts/1") // karena kita ingin mengabl data maka kita menggunaka 'get' dan "/post/1" adalah endpoint yang di tuju
        .set("Content-type", "application/json")
        .end(function (err, res) {
        // kita dapat melakukan response assertion cirteria yang kita inginkan
          expect(res.status).to.equals(200);

          done();
        });
    });
  });
