import joi from 'joi';
import uuid from 'uuid';
import Connection from '../db/connect';
import Validator from '../helpers/validation';
import getToken from '../helpers/function';

//@deleteMeetup

const deleteMeetup = (req, res) => {

  const id = req.params.id;
  Connection.query("SELECT * FROM meetup_table WHERE id=$1", [id],
    (error, result) => {
      if (error) {
      //console.log(error);
        return res.status(500).json(error);
      }
      if (result.rows.length === 0) {
        return res.status(400).json({ error: "Sorry! no meetup found." });
      }
      //@delete if it is available
      pool.query("DELETE FROM meetup_table WHERE id=$1", [id],
        (er, meetup) => {
          if (er) {
            return res.status(500).json(er);
          }
          if (!meetup) {
            return res.status(500).json({ error: "something went wrong try again later" });
          }
          return res.status(200).json({ success: true, message: "you deleted a meetup successfully." });
        });
    });
};

export default deleteMeetup;