const joi= require ('joi');

const Validator = {
  userSchema: joi.object().keys({
    firstname: joi.string().regex(/^[a-zA-Z]/).min(2).required(),
    lastname: joi.string().regex(/^[a-zA-Z]/).min(2).required(),
    othername: joi.string().regex(/^[a-zA-Z]/),
    email: joi.string().email().required(),
    username: joi.string().regex(/^[a-zA-Z0-9_-]/).min(5).required(),
    phoneNumber: joi.string().regex(/\d{10}/),
    password: joi.string().min(8).required(),
    
  }),
  
  questionSchema: joi.object().keys({
    title: joi.string().alphanum()
    .required(),
    body: joi.string().alphanum()
    .required(),
    createdBy:joi.string().alphanum()
    .required(),
  }),

  meetupSchema: joi.object().keys({
    topic: joi.string().required(),
    happeningOn: joi.string().required(),
    location: joi.string().required(),
    // tags: joi.array().items(joi.string()),

  }),
  commentSchema: joi.object().keys({
    comment: joi.string().required().min(1),
  }),
  loginSchema: joi.object().keys({
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
  validationOption: {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: true,
  },
  rsvpSchema: joi.object().keys({
    answer: joi.string().required(),
  }),

};
module.exports = Validator;