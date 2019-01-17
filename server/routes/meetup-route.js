const meetupsController = require('../controllers/meetups');
const upc = require('../controllers/upcoming-meetups');

const express = require('express');
const router = express.Router();

router.get('/upcoming',upc.getAllUpcomingMeetups);
router.get('/:id',meetupsController.getSpecificMeetup);
router.get('/',meetupsController.getMeetups);
router.post('/',meetupsController.createMeetups);


module.exports=router;