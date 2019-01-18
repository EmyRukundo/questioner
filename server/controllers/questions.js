const questions = require('../models/question.js');
const fs = require('fs');
const path = require('path');



const getQuestions =  (req,res)=>{
	res.json({
		status:200,
		data:questions
	})
}

const createQuestion = (req,res)=>{

 

    const userId=1;
	const newQuestion ={
		id: questions.length +1,
		createdOn: new Date(),
		createdBy: userId,
		meetup: req.params.id,
		title: req.body.title,
		body: req.body.question,
		upvotes:0,
		downvotes:0,
		upvotedBy:[],
        downvotedBy:[],
	};

	questions.push(newQuestion);
fs.writeFileSync(path.resolve(__dirname,'../data/questions.json'),JSON.stringify(questions,null,8));
	res.status(200).json({
		status: 200,
		data: newQuestion
	 });
}

module.exports = {
	getQuestions,createQuestion
}