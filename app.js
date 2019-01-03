const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
	res.send('Meetup questioner');
});



// start
const users=[{
		id:1,
		firstname: 'Alan',
		lastname: 'mugabo',
		othername: 'tresor',
		email: 'alainmugabo@gmail.com',
		phoneNumber: '+250784080401',
		username: 'admin',
		registered: '04/01/2018',
		isAdmin: true,}
	];

	app.get('/api/users',(req,res)=>{
	res.status(200).send(users);

});
//meetup
const meetup =[{
id :1,
createdOn : '04/01/2018',
location :'Kigali-Kacyiru',
images : '[String, String]', // OPTIONAL: URL to the image location
topic : 'How to become world class developer',
happeningOn :'14/01/2018', // when the meetup is holding
Tags : ['Software development','computer science'],

}];

	app.get('/api/meetup',(req,res)=>{
	res.status(200).send(meetup);

});
//question
const question =[{
id :1,
createdOn :'05/01/2018',
createdBy :1, // represents the user asking the question
meetup : 1, // represents the meetup the question is for
title :'Question',
body :'You can ask any question or suggest something!',
votes :1,
}];

app.get('/api/question',(req,res)=>{
	res.status(200).send(question);
});


app.get('*',(req,res)=>{
	res.status(404).send("This is not the page you are looking for!");
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log("Listening on port " +port));