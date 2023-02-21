const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("homepage");
};

const sample = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomepage,
  sample,
};
