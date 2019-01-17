const rsvpController = require('../controllers/rsvp-meetup.js')
const express = require('express');
const router = express.Router();

router.post('/',rsvpController.rsvpMeetup);

module.exports=router;