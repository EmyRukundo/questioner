const express = require('express');
const router = express.Router();


//Create question on specific meetup

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

}

];
router.get('/',(req,res)=>{
	res.status(200).send(questions);
});




router.post('/',(req,res)=>{

	const createQuestion ={
		id: questions.length +1,
		user: req.body.use,
		meetupp: req.body.meetupp,
		titlee: req.body.titlee,
		bodyy: req.body.bodyy

	}

	questions.push(createQuestion);
	 res.status(200).json({
	 	status:200,
	 	data:createQuestion
	 });
});
module.exports=router;