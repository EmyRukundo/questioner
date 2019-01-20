const chai = require('chai');
const chaiHttp = require('chai-http');
const app= require('../config/app');

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);


  describe('/POST /api/v1/meetups/:id', () => {
    it('it should return all Questions', () => {
      const Question = {
        title: "MeetupToBuildSociety",
        question: "How sould we stop drugs in youth",

      };
      chai.request(app).post('/api/v1/meetups/1').send(Question).end((err, res) => {
        try {
          res.body.should.be.a('object');
         ;
        } catch (error) {
          throw error;
        }
      });
    });
});