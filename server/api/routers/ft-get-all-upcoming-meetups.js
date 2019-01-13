const express = require('express');
const router = express.Router();


//Get all upcoming meetups 



 const upcomingMeetups =[{
id : 1, // meetup record primary key
title : "Become a Software developer",
location: "UR- Main Builing, Gikondo",
happeningOn: "2018/Feb/05", // date the meetup holds
tags: ["Andela DEvelopers", "Google DEvelopers"]
}, {
	id : 2, // meetup record primary key
title : "Why you should learn programming",
location: "Nairobi",
happeningOn: "2018/Feb/10", // date the meetup holds
tags: ["Andela DEvelopers", "Google DEvelopers","MYICT"]

},
{
	id : 3, // meetup record primary key
title : "Technology transforming Africa continent",
location: "Kigali, convention center",
happeningOn: "2018/Feb/15", // date the meetup holds
tags: ["Andela DEvelopers", "MYICT","RDB","Transform Africa"]
},
{
	id : 4, // meetup record primary key
title : "Integrate Technology to the youths",
location: "Lagos",
happeningOn: "2018/Feb/25", // date the meetup holds
tags: ["Andela DEvelopers", "Google DEvelopers","Facebook","Nigeria Technology center"]
}

];
	router.get('/',(req,res)=>{
	res.status(200).send(upcomingMeetups);
});

module.exports=router;