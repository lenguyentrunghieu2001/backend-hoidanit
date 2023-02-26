const Kitten = require("../models/Kitten");

const index = (req, res) => {
  const cat = new Kitten({ name: "thachss thảo trung hieu" });
  cat.save(); // 'Silence'

  res.send("helo");
};

module.exports = { index };
