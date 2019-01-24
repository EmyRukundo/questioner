import express from 'express';
import registerUser from '../controllers/user';
import getUsers from '../controllers/allUsers';
import knownUser from '../controllers/login';


const router = express.Router();


router.get('/',getUsers);
router.post('/login',knownUser);
router.post('/signUp',registerUser);

 export default router;