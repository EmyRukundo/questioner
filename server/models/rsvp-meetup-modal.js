const fs = require('fs');
const path = require('path');
const rsvpData = fs.readFileSync(path.resolve(__dirname,'../data/rsvp-meetups.json'),{encoding:'utf8'});
const rsvpMeetups = JSON.parse(rsvpData);
module.exports = rsvpMeetups;