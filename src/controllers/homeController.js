const connection = require("../config/database");
const {
  getAllUsers,
  addUser,
  getUserById,
  updateUser,
} = require("../services/CRUDServices");

// trang danh sách
const getHomepage = async (req, res) => {
  let result = await getAllUsers();
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

// trang show edit user
const getUpdateUser = async (req, res) => {
  let userId = req.params.id || 0;
  // check có param không
  if (typeof userId == "undefined") {
    res.redirect("/error");
    return;
  }
  let user = await getUserById(userId);
  // check param có trong không
  if (!Object.keys(user).length) {
    res.redirect("/");
    return;
  }
  return res.render("home/edit", { user: user });
};

// trang update user db
const postUpdateUser = async (req, res) => {
  let { id, email, name, city } = req.body;
  let array = [email, name, city, id];
  let update = await updateUser(array);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getAddUserPage,
  postCreateUser,
  getUpdateUser,
  postUpdateUser,
};
