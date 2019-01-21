const path = require('path');
const fs = require('fs');

const user = fs.readFileSync(path.resolve(__dirname,'../data/user.json'),{encoding:'utf8'});
const users = JSON.parse(user);
module.exports=users;
