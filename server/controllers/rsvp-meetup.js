const rsvp_meetups = require('../models/rsvp-meetup-modal.js');
const fs = require('fs');
const path = require('path');

const rsvpMeetup = (req,res)=>{
	const newRsvpMeetup={
		id: rsvp.length+1,
		specific_meetup: req.params.id,
		user:1,
		status:req.body.status,
	};
	rsvpMeetup.push(newRsvpMeetup);
	fs.writeFileSync(path.resolve(_dirname,'../data/rsvp-meetups.json'),JSON.stringify(rsvp_meetups,null,8));
};
module.exports={
	rsvpMeetup
}