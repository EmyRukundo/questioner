
const express = require('express');
const app = express();
const http = require('http');
const router = express.Router();

const cache={};


app.use(express.json());



const meetuprouters = require('../api/routers/ft-get-all-meetups');
const createMeetupRouters = require('../api/routers/ft-create-meetup');
const getUpcomingMeetupsRouters = require('../api/routers/ft-get-all-upcoming-meetups');
const createQuestionRouters = require('../api/routers/ft-create-question');
const upvoteQuestionRouters = require('../api/routers/ft-upvote-question');
const downvoteQuestionRouters = require('../api/routers/ft-downvote-question');
const rsvpMeetupRouters = require('../api/routers/ft-meetup-rsvp');


app.use('/api/v1/meetup', meetuprouters);
app.use('/api/v1/createMeetup', createMeetupRouters);
app.use('/api/v1/upcomingMeetups',getUpcomingMeetupsRouters );
app.use('/api/v1/createQuestion', createQuestionRouters);
app.use('/api/v1/upvoteQuestion', upvoteQuestionRouters);
app.use('/api/v1/downvoteQuestion',downvoteQuestionRouters);
app.use('/api/v1/rsvpMeetup', rsvpMeetupRouters);



//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log("Listening on port " +port));
module.exports= router;
module.exports=app;