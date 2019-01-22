const rsvpController = require('../controllers/rsvpMeetup.js')
const express = require('express');
const router = express.Router();

router.post('/',rsvpController.rsvpMeetup);

module.exports=router;