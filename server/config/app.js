const express = require('express');
const app = express();
const http = require('http');
const router = express.Router();
const body_parse = require('body-parser');


app.use(express.json());
app.use(body_parse.json());
app.use(body_parse.urlencoded({extended: false}));


const meetupsRouter = require('../routes/meetup');
const questionsRouter = require('../routes/question');
const rsvpRouter = require('../routes/rsvp');
const userRouter = require('../routes/user');




app.use('/api/v1/meetups/',meetupsRouter);
app.use('/api/v1/questions/',questionsRouter);
app.use('/api/v1/rsvps/',rsvpRouter);
app.use('/api/v1/user/',userRouter);
app.get('/',(req,res) => {
	res.status(202).send('Welcome!! Here you go. Its time to interact with the APIs');
});
app.get((err,req,res,next) => {
	res.status(404).send('This is not the page you are looking for');
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log("Listening on port " +port));
module.exports= router;
module.exports=app;