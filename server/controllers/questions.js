const questions = require('../models/question-modal.js');
const fs = require('fs');
const path = require('path');
const getQuestions =  (req,res)=>{
	res.json({
		status:200,
		data:questions
	})
}

const createQuestion = (req,res)=>{

	const newQuestion ={
		id: questions.length +1,
		user: req.body.use,
		meetupp: req.body.meetupp,
		titlee: req.body.titlee,
		bodyy: req.body.bodyy

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