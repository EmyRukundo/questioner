const fs = require('fs');
const path= require ('path');
const questions =require ('../models/question-modal');

const equate = (value1,value2) => {
  return parseInt(value1,10) === parseInt(value2,10);
}
const downvoteQuestion = (req, res) => {
  // current logged in user id
  const userId = 1;
  // grab the question to vote
  let question = questions.find((question) => equate(question.id,req.params.id) );
  // of the question is found
  if(question) {
    console.log(question)
    // remove the question from array before votes
    questions.splice(questions.indexOf(question))
    // check if the user have not voted of upvoted the same 
    console.log(question.upvotedBy);
    if(!(question.upvotedBy.find((user_id)=> equate(user_id,userId))) && !(question.downvotedBy.find((user_id) => equate(user_id,userId)))) {
        question.downvotes += 1;
        question.downvotedBy.push(userId);
    }
    // if none of the above then check if the user have downvoted and shift the vote to upvote
    else if(question.upvotedBy.find((user_id) => equate(user_id,userId))) {
      question.upvotes -= 1; // increase upvotes
      question.downvotes += 1; // decrease downvotes
      question.downvotedBy.push(userId); // shift the user from downvoted to upvoted users
      question.upvotedBy.splice(question.downvotedBy.indexOf(userId),1); // remove user from downvoted users

    }

  }

  // update the  questions array after votes
  questions.push(question);
  
  fs.writeFileSync(path.resolve(__dirname, '../data/questions.json'), JSON.stringify(questions, null, 2));
      res.json({
        status:201,
        data:question,
      })
};
module.exports={
 downvoteQuestion
};