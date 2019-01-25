import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../config/app';

process.env.NODE_ENV = 'test';
chai.should();
chai.use(chaiHttp);

describe('testing meetups', () => {
  describe('/GET /api/v1/meetups', () => {
    it('Should get all the meetups', () => {
      chai.request(app).get('/api/v1/meetups').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
      });
    });
  });

  
  describe('/GET /api/v1/meetups/:id', () => {
    it('Should get a specific meetup', () => {
      chai.request(app).get('/api/v1/meetups/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
        });
    });
  });
  
  describe('/GET /api/v1/meetups/upcoming', () => {
    it('Should get all upcoming meetups', () => {
      chai.request(app).get('/api/v1/meetups/upcoming')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
        });
    });
  });

  describe('/POST /api/v1/meetups', () => {
    it('Should post a meetup', () => {
      const newMeetup = {
        location: 'Kigali Rwanda',
        topic: 'How to become a world sosftware developer',
        happeningOn: new Date(2019, 3, 3),
        tags: ['Andela', 'sosftware Development', 'Kigali Andela Bootcamp'],
      };
      chai.request(app).post('/api/v1/meetups').send(newMeetup).end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        const meetup = res.body.data;
        meetup.should.have.property('id').eql(meetup.id);
        meetup.should.have.property('createdOn');
        meetup.should.have.property('location');
        meetup.should.have.property('images');
        meetup.should.have.property('topic');
        meetup.should.have.property('happeningOn');
        meetup.should.have.property('tags');
      })
        .catch((error) => {
          throw error;
        });
    });
  });
  
  describe('/GET /api/v1/meetups/:id/rsvp', () => {
    it('Should confirm to attend meetup ', () => {
      const reservation = {
        id: 1,
        meetup: 1,
        answer: 'Yes',
      };
      chai.request(app).post('/api/v1/meetups/1/rsvp').send(reservation).end((err, res) => {
        try {
          res.should.have.status(200);
        } catch (error) {
          throw error;
        }
      });
    });
  });
});