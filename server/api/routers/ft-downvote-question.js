const express = require('express');
const router = express.Router();



const quesions =[{

id:1,
user: "1", // user who posted the question
meetupp: "1", // meetup record primary key
titlee :"programming",
bodyy:"Why many people fail to learn programming"

},{
id:2,
user: "1", // user who posted the question
meetupp: "2", // meetup record primary key
titlee :"programming",
bodyy:"Why many people fail to learn programming?",

}

];


router.put('/:id',(req,res)=>{

	const downQuestion = questions.find(c=> c.id=== parseInt(req.params.id));
	if(!downQuestion) res.status(404).send('The course with the given ID was not found');

	downQuestion.name = req.body.name;
	downQuestion.meetup = req.body.meetup;
    downQuestion.title = req.body.title;  // title of the question
    downQuestion.body = req.body.body;// body of the question
    downQuestion.votes = req.body.votes;

    quesions.push(downQuestion);
	 res.status(200).json({
	 	status:200,
	 	data:downQuestion
	 });
	
});

module.exports=router;
