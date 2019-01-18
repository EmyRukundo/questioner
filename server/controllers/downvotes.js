const fs = require('fs');
const path= require ('path');
const questions =require ('../models/question');

const equate = (value1,value2) => {
  return parseInt(value1,10) === parseInt(value2,10);
}
const downvoteQuestion = (req, res) => {
  
  const userId = 1;
  
  let question = questions.find((question) => equate(question.id,req.params.id) );
  
  if(question) {
    console.log(question)
    
    questions.splice(questions.indexOf(question))
     
    console.log(question.upvotedBy);
    if(!(question.upvotedBy.find((user_id)=> equate(user_id,userId))) && !(question.downvotedBy.find((user_id) => equate(user_id,userId)))) {
        question.downvotes += 1;
        question.downvotedBy.push(userId);
    }
  
    else if(question.upvotedBy.find((user_id) => equate(user_id,userId))) {
      question.upvotes -= 1; 
      question.downvotes += 1; 
      question.downvotedBy.push(userId); 
      question.upvotedBy.splice(question.downvotedBy.indexOf(userId),1);

    }

  }

  
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