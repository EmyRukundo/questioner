const joi = require ('joi');
const users= require ('../models/user');
const Validation = require ('../helpers/validation');

const knownUser = (req, res) => {
  joi.validate(req.body, Validation.loginSchema, Validation.validationOption, (err, result) => {
    if (err) {
      return res.statu(500).json({
        status: 500,
        error: err,
      });
    }
    const userAccount = {
      username: result.username,
      password: result.password,
    };
    const user = users.find(usr => usr.username === userAccount.username && usr.password === userAccount.password);
    if (user) {
      res.json({
        status: 200,
        data: user,
      });
    } else {
      res.json({
        status: 404,
        error: 'wrong username or password',
      });
    }
  });
};
module.exports=knownUser;