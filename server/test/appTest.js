process.env.NODE_ENV ='test';
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../config/app.js');

const expect = chai.expect;
chai.use(chaiHttp);


const meetup=[
	{
id :1,
createdOn : '04/01/2018',
location :'Kigali-Kacyiru',
topic : 'How to become world class developer',
happeningOn :'14/01/2018', // when the meetup is holding
Tags : ['Software development','computer science'],

}, {
	id :2,
createdOn : '04/01/2018',
location :'Kigali-Kacyiru',
topic : 'How to become world class developer',
happeningOn :'14/01/2018', // when the meetup is holding
Tags : ['Software development','computer science'],}
];

const question=[{

id:1,
user: "1", 
meetupp: "1", 
titlee :"programming",
bodyy:"Why many people fail to learn programming"

},{
id:2,
user: "1", 
meetupp: "2",
titlee :"programming",
bodyy:"Why many people fail to learn programming?",

}];


describe('/GET all meetups',()=>{
	it('it should return all the meetups',(done)=>{
 		chai.request(server)
 		.get('/api/v1/meetup')
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
		.get('/api/v1/meetup/${num}')
		.end((err,res) =>{
			res.should.have.status(200);
			res.body.should.be.a('object');
			done();

		});
	});
});

//RSVP

describe('POST RSVP meetup',()=>{

	const rsvpId=2;
	it('it should be to reach RSVP',()=>{
		chai.request(server)
		.get('api/v1/meetup/:id/rsvpId')
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
  	.post('/api/v1/meetup')
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









