import Connection from '../db/connect';

const questions = async () => {
  const sql = 'SELECT * FROM question_table';
  const { rows } = await Connection.executeQuery(sql);
  return [...rows];
};

export default questions;