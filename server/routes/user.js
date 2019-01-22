const express = require ('express');
const userController = require('../controllers/allUsers');
const signupController = require ('../controllers/signUp');
const loginController = require ('../controllers/login');
const router = express.Router();

router.get('/', userController.allUsers);
router.post('/login',loginController.knownUser);
router.post('/signUp',signupController.register);

module.exports=router;