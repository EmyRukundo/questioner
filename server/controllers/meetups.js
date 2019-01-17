const meetups = require('../models/meetup-modal.js');
const fs = require('fs');
const path = require('path');
const getMeetups =  (req,res)=>{
	res.json({
		status:200,
		data:meetups
	})
}

const createMeetups = (req,res)=>{
     
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
	res.status(200).json({
		status: 200,
		data: newMeetup
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