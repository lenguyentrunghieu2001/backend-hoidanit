const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("homepage");
};

const sample = (req, res) => {
  res.render("sample");
};

const postCreateUser = (req, res) => {
  console.log(">>> req.body :", req.body);
  res.send("Create User");
};

module.exports = {
  getHomepage,
  sample,
  postCreateUser,
};
