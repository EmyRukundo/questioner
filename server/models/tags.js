import Connection from '../db/connect';

const tags = async () => {
  const sql = 'SELECT * FROM tags_table';
  const { rows } = await Connection.executeQuery(sql);
  return [...rows];
};
export default tags;