const express = require('express');
const router = express.Router();


//Create question on specific meetup

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

router.post('/',(req,res)=>{

	const createQuestion ={
		id: quesions.length +1,
		user: req.body.use,
		meetupp: req.body.meetupp,
		titlee: req.body.titlee,
		bodyy: req.body.bodyy

	};

	quesions.push(createQuestion);
	 res.status(200).json({
	 	status:200,
	 	data:createQuestion
	 });
});

module.exports=router;