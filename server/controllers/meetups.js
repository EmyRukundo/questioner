const meetups = require('../models/meetup.js');
const fs = require('fs');
const path = require('path');
const joi = require('joi');
const Validation = require('../helpers/validation');


const getMeetups =  (req,res)=>{
	res.json({
		status:200,
		data:meetups
	});
}







const createMeetups = (req,res)=>{
	joi.validate(req.body, Validation.meetupSchema, Validation.validationOption, (err, result) => {
    if (err) {
      return res.json({
        status: 401,
        error: err.details[0].message,
      })
  }
  else{
  	     
     const newMeetup = {

	id:meetups.length +1,
	createdOn: req.body.createdOn,
	location: req.body.location,
	images: req.body.images,
	topic: req.body.topic,
	happeningOn: req.body.happeningOn,
	tags: req.body.Tags
}
meetups.push(newMeetup);
fs.writeFileSync(path.resolve(__dirname,'../data/meetups.json'),JSON.stringify(meetups,null,2));
	res.status(201).json({
		status: 201,
		data: newMeetup
	});
  }
});

}
const getSpecificMeetup = (req,res) => {
	meetup = meetups.find((meetup)=> meetup.id === parseInt(req.params.id));
	if(meetup) {
		return res.json({
			status:200,
			data:meetup
		});
	}
	else{
		res.json({
			status:404,
			error:"The meetup with given id is not found"
		})
	}
}
module.exports = {
	getMeetups,createMeetups,getSpecificMeetup
}