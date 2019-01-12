const express = require('express');
const router = express.Router();


//meetup
 const meetup =[{
id :1,
createdOn : '04/01/2018',
location :'Kigali-Kacyiru',
images : '[String, String]', // OPTIONAL: URL to the image location
topic : 'How to become world class developer',
happeningOn :'14/01/2018', // when the meetup is holding
Tags : ['Software development','computer science'],

}, {
	id :2,
createdOn : '04/01/2018',
location :'Kigali-Kacyiru',
images : '[String, String]', // OPTIONAL: URL to the image location
topic : 'How to become world class developer',
happeningOn :'14/01/2018', // when the meetup is holding
Tags : ['Software development','computer science'],}];



router.get('/:id/rsvp',(req,res)=>{
	res.status(200).json({
		message: 'you have reached rsvp for a meetup'
	});
});

module.exports=router;

