import Connection from '../db/connect';
import Validation from '../helpers/validation';
import meetups from'../models/meetup.js';
import uuid from 'uuid';
import joi from 'joi';


const getMeetups = async (req, res) => res.json({
  status: 200,
  data:await meetups(),
});


const createMeetups = (req, res) => {
  joi.validate(req.body, Validation.meetupSchema, Validation.validationOption, async (err, result) => {
    if (err) {
      return res.json({
        status: 400,
        error: err.details[0].message,
      });
    }
    const dayMonthYear = result.happeningOn.split('/');
    const date = new Date(dayMonthYear[2], dayMonthYear[1], dayMonthYear[0]);
    const newMeetup = [
      uuid.v4(),
      new Date(),
      result.location,
      result.topic,
      date,
    ];
    const sql = 'INSERT INTO meetup_table (id, created_on,location,topic,happening_on) VALUES ($1,$2,$3,$4,$5) RETURNING *';
    const meetup =Connection.executeQuery(sql, newMeetup);
    meetup.then((insertedMeetup) => {
      if (insertedMeetup.rows.length) {
        return res.status(200).json({
          status: 200,
          data: insertedMeetup.rows,
        });
      }

      return res.status(400).json({
        status: 400,
        error: " Cant not save data in the database",
      });
    });
  }).catch((error) => {
    res.status(500).json({
      status: 500,
      error: `Internal server error ${error}`,
    });
  });
};


const getSpecificMeetup = (req, res) => {
  const sql = `SELECT * FROM meetup_table WHERE id = '${req.params.id}'`;
  const meetup = Connection.executeQuery(sql);
  meetup.then((result) => {
    if (result.rows.length) {
      return res.status(200).json({
        status: 200,
        data: result.rows,
      });
    }

    return res.status(404).json({
      status: 404,
      error: 'No meetup found on this id',
    });
  }).catch(error => res.status(500).json({
    status: 500,
    error: `Internal server error ${error}`,
  }));
};

export{
  getMeetups,createMeetups,getSpecificMeetup
};