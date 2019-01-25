import express from 'express';
import verifyAuthentication from '../middleware/authenticate';
import {getMeetups,createMeetups,getSpecificMeetup} from '../controllers/meetups';
import getAllUpcomingMeetups from '../controllers/upcomingMeetups';
import createQuestion from '../controllers/questions';
import rsvpMeetup from '../controllers/rsvpMeetup';
import deleteMeetup from '../controllers/deleteMeetup';

const router = express();
router.delete('/:id/delete', deleteMeetup);
router.get('/',getAllUpcomingMeetups);
router.post('/:id/rsvps',verifyAuthentication.verifyToken, rsvpMeetup);
router.post('/:id/questions',verifyAuthentication.verifyToken,createQuestion);
router.get('/:id',getSpecificMeetup);
router.get('/',getMeetups);
router.post('/',verifyAuthentication.verifyToken,verifyAuthentication.isAdmin,createMeetups);

export default router;