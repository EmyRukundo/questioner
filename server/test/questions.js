const chai = require('chai');
const chaiHttp = require('chai-http');
const app= require('../config/app');

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);


  describe('/POST /api/v1/meetups/:id', () => {
    it('it should return all the meetups', () => {
      const Question = {
        title: 'MeetupsEveryDay',
        question: 'Is meetups change the believe of the society?',

      };
      chai.request(app).post('/api/v1/meetups/1').send(Question).end((err, res) => {
        try {
          res.should.have.status(200);
          res.body.should.be.a('object');
          const question = res.body.data;
          question.should.have.property('id').eql(question.id);
          question.should.have.property('createdOn');
          question.should.have.property('createdBy');
          question.should.have.property('meetup');
          question.should.have.property('title');
          question.should.have.property('upvotes');
          question.should.have.property('downvotes');
        } catch (error) {
          throw error;
        }
      });
    });
});