const questionsController = require('../controllers/questions')
const upvoteContoller = require('../controllers/upvotes');
const downvoteController = require('../controllers/downvotes');
const express = require('express');
const router = express.Router();


router.get('/',questionsController.getQuestions);
router.post('/',questionsController.createQuestion);
router.patch('/:id/upvote',upvoteContoller.upvoteQuestion);
router.patch('/:id/downvote',downvoteController.downvoteQuestion);

module.exports=router;