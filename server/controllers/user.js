const path = require ('path');
const fs = require ('fs');
const joi = require ('joi');
const uuid = require ('uuid');
const user = require ('../models/user');
const Validation = require ('../helpers/validation');


const registerUser = (req, res) => {
  joi.validate(req.body, Validation.userchema, Validation.validationOption, (err, result) => {
    if (err) {
      return res.json({
        status: 400,
        error: err.details[0].message,
      });
    }

    const newUser = {
      id: uuid.v4(),
      firstname: result.firstname,
      lastname: result.lastname,
      othername: result.othername,
      email: result.email,
      phoneNumber: result.phoneNumber,
      username: result.username,
      registered: new Date(),
      password: result.password,
      confirmPassword: result.confirmPassword,
      isAdmin: false,
    };
    user.push(newUser);
    fs.writeFileSync(path.resolve(__dirname, '../data/user.json'), JSON.stringify(user, null, 2));
    res.json({
      status: 200,
      data: newUser,
    });
  });
};
module.exports ={
  registerUser
}