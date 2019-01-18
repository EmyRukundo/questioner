const rsvp = require('../models/rsvpMeetup.js');
const fs = require('fs');
const path = require('path');

const rsvpMeetup = (req,res)=>{
	const newRsvpMeetup={
		id: rsvp.length+1,
		specific_meetup: req.params.id,
		user:1,
		status:req.body.status,
	};
	rsvp.push(newRsvpMeetup);
	fs.writeFileSync(path.resolve(_dirname,'../data/rsvpMeetups.json'),JSON.stringify(rsvp,null,8));
     return res.json({status:200,
                       data:rsvp
                   });
};
module.exports={
	rsvpMeetup
}