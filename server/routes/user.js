const express = require ('express');
const getUsers = require('../controllers/user');
const signup = require('../../db/signUp');

const router = express.Router();


router.post('/', getUsers.registerUser);
router.post('/signUp', getUsers.registerUser);
router.post('/create',signup.create);

module.exports=router;