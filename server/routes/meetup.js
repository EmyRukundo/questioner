const meetupsController = require('../controllers/meetups');
const upcomingController = require('../controllers/upcomingMeetups');
const questionsController = require('../controllers/questions')

const express = require('express');
const router = express.Router();

router.get('/upcoming',upcomingController.getAllUpcomingMeetups);
router.get('/:id/questions',questionsController.getQuestions);
router.get('/:id',meetupsController.getSpecificMeetup);
router.get('/',meetupsController.getMeetups);
router.post('/:id/questions',questionsController.createQuestion);
router.post('/',meetupsController.createMeetups);

module.exports=router;