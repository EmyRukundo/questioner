
const express = require('express');
const app = express();
const http = require('http');
const router = express.Router();
const body_parse = require('body-parser');


app.use(express.json());
app.use(body_parse.json());
app.use(body_parse.urlencoded({extended: false}));


const meetupsRouter = require('../routes/meetup-route');
const questionsRouter = require('../routes/question-route');
const rsvpRouter = require('../routes/rsvp-route');


app.use('/api/v1/meetups/',meetupsRouter);
app.use('/api/v1/questions/',questionsRouter);
app.use('/api/v1/:id/rsvps/',rsvpRouter);

//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log("Listening on port " +port));
module.exports= router;
module.exports=app;