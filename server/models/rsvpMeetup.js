import Connection from '../db/connect';

const reservations = async () => {
  const sql = 'SELECT * FROM resvp_table';
  const { rows } = await Connection.executeQuery(sql);
  return [...rows];
};

export default reservations;