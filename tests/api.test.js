const chai = require('chai');
const expect = require('chai').expect
const chaiHttp = require('chai-http');

const app = require('../app');
// Configure chai
chai.use(chaiHttp);


describe("REST API", () => {
    it("should send a success response", () => {
        chai.request(app)
        .get('/api')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            done();
        })
    })
})