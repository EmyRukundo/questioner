import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../config/app';

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);

describe('testing questions ', () => {
  describe('/POST /api/v1/meetups/:id', () => {
    it('Should create question', () => {
      const Question = {
        title: 'Better programmer for today and tomorrow',
        question: 'Which strategies you can use to become among the one',

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
 
  describe('/GET /api/v1/questions/:id/upvote', () => {
    it('Should upvote question', () => {
      chai.request(app).put('/api/v1/questions/2/upvote').end((err, res) => {
        res.should.have.status(200);
      });
    });
  });
  
  describe('/GET /api/v1/questions/1/downvote', () => {
    it('should should downvote questions', () => {
      chai.request(app).put('/api/v1/questions/2/downvote').end((err, res) => {
        res.should.have.status(200);
      });
    });
  });
  
});