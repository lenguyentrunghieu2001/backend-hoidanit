const connection = require("../config/database");
const { getAllUsers, addUser } = require("../services/CRUDServices");

// trang danh sách
const getHomepage = async (req, res) => {
  let result = await getAllUsers();
  console.log("danh sach user : ", result);
  return res.render("home/list", { listUser: result });
};

// trang thêm
const getAddUserPage = (req, res) => {
  return res.render("home/add");
};

// trang lưu người dùng vào db
const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  let result = await addUser(email, name, city);
  console.log(result);
  res.send("create user success");
};

module.exports = {
  getHomepage,
  getAddUserPage,
  postCreateUser,
};
