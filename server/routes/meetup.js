const meetupsController = require('../controllers/meetups');
const upcomingController = require('../controllers/upcomingMeetups');

const express = require('express');
const router = express.Router();

router.get('/upcoming',upcomingController.getAllUpcomingMeetups);
router.get('/:id',meetupsController.getSpecificMeetup);
router.get('/',meetupsController.getMeetups);
router.post('/',meetupsController.createMeetups);


module.exports=router;