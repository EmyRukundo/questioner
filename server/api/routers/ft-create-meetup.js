const express = require('express');
const router = express.Router();


//meetup
 const meetup =[{
id :1,
createdOn : '04/01/2018',
location :'Kigali-Kacyiru',
images : '[.........]', // OPTIONAL: URL to the image location
topic : 'How to become world class developer',
happeningOn :'14/01/2018', // when the meetup is holding
Tags : ['Software development','computer science'],

}, {
	id :2,
createdOn : '04/01/2018',
location :'Telecom House',
images : '[String, String]', // OPTIONAL: URL to the image location
topic : 'How to become world class developer',
happeningOn :'14/01/2018', // when the meetup is holding
Tags : ['Software development','computer science'],}];



	router.get('/',(req,res)=>{
	res.status(200).send(meetup);
});

	router.post('/',(req,res)=>{
const createMeetup = {

	id:meetup.length +1,
	createdOn: req.body.createdOn,
	location: req.body.location,
	images: req.body.images,
	topic: req.body.topic,
	happeningOn: req.body.happeningOn,
	tags: req.body.Tags
}
meetup.push(createMeetup);
	res.status(200).json({
		status: 200,
		data: createMeetup
	});
});

module.exports=router;
