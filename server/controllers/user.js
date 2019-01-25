import uuid from 'uuid';
import joi from 'joi';
import Validation from '../helpers/validation';
import Helper from '../helpers/helpers';
import Connection from '../db/connect';


const registerUser = (req, res) => {
  joi.validate(req.body, Validation.userSchema, Validation.validationOption).then((result) => {
    const newUser = [
      uuid.v4(), 
      result.firstname,
      result.othername,
      result.lastname,
      result.email,
      result.username,
      result.phoneNumber,
      new Date(), // registered on
      0, // is_admin
      Helper.hashPassword(result.password, 12),
      'ABX#4454$', // token
      0, // confirmed
    ];
    const sql = `INSERT INTO user_table (id,firstname,othername,
      lastname,email,username,phone_number,registered,is_admin,password)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`;

    const user = Connection.executeQuery(sql, newUser);
    user.then((userResult) => {
      if (userResult.rows.length) {
        return res.status(201).json({
          status: 201,
          data: userResult.rows,
        });
      }

      return res.status(400).json({
        status: 400,
        error: 'Failed to signup',
      });
    }).catch(error => res.status(500).json({
      status: 500,
      error: `Internal server Error ${error}`,
    }));
  }).catch(error => res.status(404).json({ status: 404, error: [...error.details] }));
};
export default registerUser;