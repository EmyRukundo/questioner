const meetups = require('../models/meetup.js');

const upcomingMeetup =(meetup)=>{
  
  const meetupTime =meetup.happeningOn.split('/');
  const meetupDate = new Date(parseInt(meetupTime[2],10),parseInt(meetupTime[1],10), parseInt(meetupTime[0],10));
  if(meetupDate.getTime()> (new Date()).getTime()){

  	return true;

}
  	
return false;
console.log(meetupDate.getTime());
};

const getAllUpcomingMeetups = (req,res)=>{
	const upcoming = meetups.filter(meetup => upcomingMeetup(meetup));

	if(upcoming){
		return res.json({
			status:200,
            data:upcoming
		    });
	}
	return res.json({
		status:404,
		error:'There is no any upcoming meetup found',
	});
};
module.exports={
	getAllUpcomingMeetups
}