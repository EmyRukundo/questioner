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

},{
id :2,
createdOn : '04/01/2018',
location :'Telecom House',
images : '[.........]', // OPTIONAL: URL to the image location
topic : 'Why you should join Andela?',
happeningOn :'12/01/2018', // when the meetup is holding
Tags : ['Software development','computer science', 'career at Andela'],

},{
	id :3,
createdOn : '04/01/2018',
location :'Kigali-Kacyiru',
images : '[String, String]', // OPTIONAL: URL to the image location
topic : 'How to become world class developer',
happeningOn :'14/01/2018', // when the meetup is holding
Tags : ['Software development','computer science'],}];



	router.get('/',(req,res)=>{
	res.status(200).json({
      status: 200,
      data: meetup
   });
});




 router.get('/:id',(req,res) =>{
   const findedMeetup = meetup.find(c => c.id === parseInt(req.params.id, 10));
   
   	res.status(200).json({
		status: 200,
		data: findedMeetup
	});
     }); 

module.exports=router;


