import Connection from '../db/connect';

const comments = async () => {
  const sql = 'SELECT * FROM comment_table';
  const { rows } = await Connection.executeQuery(sql);
  return [...rows];
};
export default comments;