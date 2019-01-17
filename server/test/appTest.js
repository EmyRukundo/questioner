process.env.NODE_ENV ='test';
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../config/app.js');
const meetup = require('../data/meetups.json');
const question = require('../data/questions.json');
const expect = chai.expect;
chai.use(chaiHttp);




describe('/GET all meetups',()=>{
	it('it should return all the meetups',(done)=>{
 		chai.request(server)
 		.get('/api/v1/meetups')
 		.end((err,res)=>{
 			res.should.have.status(200);
 			res.body.should.be.a('object');
 			done();
 		});
	});
});

//get one meetup test by id
describe('/GET a specific meetup record',() =>{
	const num=1;
	it('it should return a meetup', (done)=>{
		chai.request(server)
		.get('/api/v1/meetups/${num}')
		.end((err,res) =>{
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();

		});
	});
});

//Test RSVP

describe('POST RSVP meetup',()=>{

	it('it should be to reach RSVP',()=>{
		chai.request(server)
		.get('api/v1/:id/rsvps')
		.end((err,res) =>{
			res.should.have.status(200);
			res.body.should.be.a('object');
			
		});
	});
});

// test create a meetup

describe('/POST create a meetup',()=>{
  it('it should be able to create a meetup',()=>{
  	const mtp ={
  		id: meetup.length +1,
  		createdOn: '13/01/2018',
  		location:'Kigali Height',
  		topic: 'Andela learning commuty',
  	};
  	chai.request(server)
  	.post('/api/v1/meetups')
  	.send(mtp)
  	.end((err,res)=>{
  		res.should.have.status(200);
  		res.body.should.be.a('object');
 		
  	});
  });
});

// test create a question

describe('/Post create a question',()=>{
	it('it should be able to create a question',(done)=>{
		const qst={
			id: questions.length +1,
			createdOn:'02/01/2019',
			createdBy:1,
			meetup:1,
		};
		chai.request(server)
		.post('api/v1/question')
		.send(qst)
		.end((err,res)=>{
			res.should.have.status(201);
			res.body.should.be.a('object');
			done();
		});
	});
});

// test updatevote question

describe('/put/:id question (downvote)',()=>{
	it('it should UPDATE(downvote) a question given the id',(done) =>{
		const qId =100;
		chai.request(server)
		.patch(`api/v1/question/${qId}/downvote`)
		.end((err,res)=>{
		res.should.have.status(200);
		res.body.should.have.property('message').eql("you have successfully downvote a question");
		done();
	});
});

});