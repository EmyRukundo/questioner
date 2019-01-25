
import users from '../models/user';
import Connection from '../db/connect';

const getUsers = async (req, res) => {
  if (users) {
    return res.json({
      status: 200,
      data:users,

    });
  }

  return res.json({
    status: 404,

    error: 'No users found',
  });
};
export default getUsers;

