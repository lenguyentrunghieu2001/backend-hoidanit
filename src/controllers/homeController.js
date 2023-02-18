const getHomepage = (req, res) => {
  res.send("Hello World hiasdhu11sads o k ok a!");
};

const sample = (req, res) => {
  res.render("sample");
};

module.exports = {
  getHomepage,
  sample,
};
