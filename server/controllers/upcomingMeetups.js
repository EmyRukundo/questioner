import meetups from'../models/meetup.js';
import Connection from '../db/connect'; 

const getAllUpcomingMeetups = async (req, res) => {
  const sql = 'SELECT * FROM meetup_table WHERE happening_on > NOW()';
  const upcommingMeetups = Connection.executeQuery(sql);
  upcommingMeetups.then((result) => {
    if (result.rows.length) {
      return res.status(200).json({
        status: 200,
        data: result.rows,
      });
    }

    return res.status(404).json({
      status: 404,
      error: 'No any upcoming meetups found',
    });
  }).catch((error) => {
    res.status(500).json({
      status: 500,
      error: `Internal server error ${error}`,
    });
  });
};
export default getAllUpcomingMeetups;