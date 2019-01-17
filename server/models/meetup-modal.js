const fs = require('fs');
const path = require('path');
const meetupData = fs.readFileSync(path.resolve(__dirname,'../data/meetups.json'),{encoding:'utf8'});
const meetups = JSON.parse(meetupData);
module.exports = meetups;