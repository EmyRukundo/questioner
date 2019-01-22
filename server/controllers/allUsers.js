const users =require ('../models/user');

const allUsers= (req, res) => {
  if (users) {
    return res.json({
      status: 200,
      data: users,
    });
  }

  return res.json({
    status: 404,
    error: 'No user found',
  });
};

module.exports=allUsers;