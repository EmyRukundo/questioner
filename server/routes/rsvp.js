import express from 'express';
import rsvpMeetup from '../controllers/rsvpMeetup.js';

const router = express.Router();

router.post('/',rsvpMeetup);

export default router;