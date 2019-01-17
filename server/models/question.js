const fs = require('fs');
const path = require('path');
const questionData = fs.readFileSync(path.resolve(__dirname,'../data/questions.json'),{encoding:'utf8'});
const questions = JSON.parse(questionData);
module.exports = questions;