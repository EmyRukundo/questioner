const express = require('express');
const router = express.Router();

const questions =[{

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


router.put('/:id',(req,res)=>{

	const upvoteQuestion = questions.find(c=> c.id=== parseInt(req.params.id));
	if(!upvoteQuestion) res.status(404).send('The course with the given ID was not found');

	upvoteQuestion.name = req.body.name;
	upvoteQuestion.meetup = req.body.meetup;
    upvoteQuestion.title = req.body.title;  // title of the question
    upvoteQuestion.body = req.body.body;// body of the question
    upvoteQuestion.votes = req.body.votes;

    questions.push(upvoteQuestion);
	 res.status(200).json({
	 	status:200,
	 	data:upvoteQuestion
	 });
	
});

module.exports=router;
