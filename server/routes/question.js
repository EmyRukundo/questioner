import {getQuestion,createQuestion} from '../controllers/questions';
import upvote from '../controllers/upvotes';
import downvote from '../controllers/downvotes';
import { getComment, postComment } from '../controllers/comment';
import express from 'express';

const router = express.Router();

router.get('/:id/comment', getComment);
router.patch('/:id/upvote',upvote);
router.patch('/:id/downvote',downvote);
router.post('/:id/comment', postComment);


export default router;