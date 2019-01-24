import express from 'express';
import fileUpload from 'express-fileupload';
// import logger from 'morgan';
import session from 'express-session';
import bodyParser from 'body-parser';
import meetupsRouter from '../routes/meetup';
import questionsRouter from '../routes/question';
import rsvpRouter from '../routes/rsvp'; //
import userRouter from '../routes/user';
// const router = app.Router();
const app = express();

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: '_2@0)1!9(',
  cookie: {
    secure: true,
  },
}));

app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(logger());





app.use('/api/v1/meetups/',meetupsRouter);
app.use('/api/v1/questions/',questionsRouter);
app.use('/api/v1/rsvps/',rsvpRouter);
app.use('/api/v1/user/',userRouter);
app.use('/api/v1/upcoming/',meetupsRouter);

app.get('/',(req,res) => {
	res.status(202).send('Welcome!! Here you go. Its time to interact with the APIs');
});
app.get((err,req,res,next) => {
	res.status(404).send('This is not the page you are looking for');
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log("Listening on port " +port));

export default app;

