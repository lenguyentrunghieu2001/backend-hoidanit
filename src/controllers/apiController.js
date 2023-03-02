const { model } = require("mongoose");
const User = require("../models/user");

const getUsers = async (req, res) => {
  let user = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

module.exports = { getUsers };
