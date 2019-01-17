const fs= require('fs');
const path=require ('path');
const questions = require('../models/question-modal.js');

const DownVoteQuestion = (req, res) => {
  const downvote = questions.filter((question) => {

    if (parseInt(question.id, 10) === parseInt(req.params.id, 10)) {
        question.votes -= 1; 
        return question;
      }

  });
  fs.writeFileSync(path.resolve(__dirname, '../data/questions.json'), JSON.stringify(downvote, null, 10));
  res.json({ status: 200, data: upvote });
};
module.exports={ 
  DownVoteQuestion
}
