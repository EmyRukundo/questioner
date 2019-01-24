import Connection from '../db/connect';

const meetups = async () => {
  const sql = 'SELECT * FROM meetup_table';
  const { rows } = await Connection.executeQuery(sql);
  return [...rows];
};

export default meetups;