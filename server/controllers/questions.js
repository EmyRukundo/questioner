const questions = require('../models/question.js');
const fs = require('fs');
const path = require('path');
const joi = require('joi');
const Validation = require('../helpers/validation');



const getQuestions =  (req,res)=>{
	const onMeetup = req.params.id;
	const quesionsOnMeetup =  questions.filter((quest) => parseInt(quest.meetup) === parseInt(onMeetup));
	res.json({
		status:200,
		data:quesionsOnMeetup
	})
}

const createQuestion = (req,res)=>{
 joi.validate(req.body, Validation.questionSchema, Validation.validationOption, (err, result) => {
    const userId=1;
	const newQuestion ={
		id: questions.length +1,
		createdOn: new Date(),
		createdBy: userId,
		meetup: req.params.id,
		title: req.body.title,
		body: req.body.body,
		upvotes:0,
		downvotes:0,
		
	};

	questions.push(newQuestion);
fs.writeFileSync(path.resolve(__dirname,'../data/questions.json'),JSON.stringify(questions,null,2));
	res.status(200).json({
		status: 200,
		data: newQuestion
	 });
})
}

module.exports = {
	getQuestions,createQuestion
}