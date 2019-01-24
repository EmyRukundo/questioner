import uuid from 'uuid';
import joi from 'joi';
import Validation from '../helpers/validation';
import Helper from '../helpers/helpers';
import Connection from '../db/connect';



const registerUser = async (req, res) => {
  joi.validate(req.body, Validation.userSchema, Validation.validationOption, async (err, result) => {
    if (err) {
      return res.json({
        status: 400,
        error: err.details[0].message,
      });
    }

    const newUser = [
      uuid.v4(), 
      result.firstname,
      result.othername,
      result.lastname,
      result.email,
      result.username,
      result.phoneNumber,
      new Date(), 
      0, 
      Helper.hashPassword(result.password, 10),
    ];
    const sql = `INSERT INTO user_table (id,firstname,othername,
      lastname,email,username,phone_number,registered,is_admin,password)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`;

    const user = Connection.executeQuery(sql, newUser);
    user.then((result) => {
      console.log(result);
      if (result.rows.length) {
        return res.status(201).json({
          status: 201,
          data: result.rows,
        });
      }

      return res.status(400).json({
        status: 400,
        error: 'Oops no data found!',
      });
    }).catch(error => res.status(500).json({
      status: 500,
      error: `Internal server Error ${error}`,
    }));
  });
};
export default registerUser;