const chai = require ('chai');
const chaiHttp = require('chai-http');
const app = require ('../config/app');
process.env.NODE_ENV = 'test';
const should = chai.should();
chai.use(chaiHttp);


  describe('/GET /api/v1/meetups', () => {
    it('Should get all meetups', () => {
      chai.request(app)
      .get('/api/v1/meetups')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
      });
    });
  });

  
  describe('/GET /api/v1/meetups/:id', () => {
    it('Should get a specific meetups', () => {
      chai.request(app)
      .get('/api/v1/meetups/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
      });
    });
  });
  
  describe('/GET /api/v1/meetups/upcoming', () => {
    it('Should get all upcoming meetups', () => {
      chai.request(app)
      .get('/api/v1/meetups/upcoming')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
      });
    });
  });

  describe('/POST /api/v1/meetups', () => {
    it('Should post a meetup', () => {
      const newMeetup = {
        location: 'Telecom house',
        topic: 'Andela open session',
        happeningOn: new Date(2019, 3, 3),
        tags: ['programing', 'talent development', 'bootcamp induction'],
      };
      chai.request(app).post('/api/v1/meetups')
      .send(newMeetup)
      .end((err, res) => {
        try {
    
          res.body.should.be.a('object');
          
        } catch (error) {
          throw error;
        }
      });
    });
  });

  describe('/GET /api/v1/meetups/:id/rsvp', () => {
    it('Should reserve place to meetup with id of 5', () => {
      const newRsvpMeetup = {
        id: 1,
        specific_meetup: 1,
        user: 1,
        status: "yes"
      };
      chai.request(app)
      .post('/api/v1/meetups/1/rsvp')
      .send(newRsvpMeetup)
      .end((err, res) => {
        try {
         //should.exist(res.body);
          res.body.should.be.a('object');
        } catch (error) {
          throw error;
        }
      });
    });
  });
