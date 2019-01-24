import express from 'express';
import verifyAuthentication from '../middleware/authenticate';
import {getMeetups,createMeetups,getSpecificMeetup} from '../controllers/meetups';
import getAllUpcomingMeetups from '../controllers/upcomingMeetups';
import {getQuestion,createQuestion} from '../controllers/questions';
import rsvpMeetup from '../controllers/rsvpMeetup';

const router = express();



router.get('/',getAllUpcomingMeetups);
router.post('/:id/rsvps',verifyAuthentication.verifyToken, rsvpMeetup);
router.post('/:id/questions',verifyAuthentication.verifyToken,createQuestion);
router.get('/:id',getSpecificMeetup);
router.get('/',getMeetups);
router.get('/:id/questions',getQuestion);

router.post('/',verifyAuthentication.verifyToken,verifyAuthentication.isAdmin,createMeetups);

export default router;