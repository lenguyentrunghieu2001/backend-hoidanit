const {
  getAllUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
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
  await addUser(email, name, city);
  res.send("create user success");
};

// trang show edit user
const getUpdateUser = async (req, res) => {
  let userId = req.params.id;
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
  await updateUser(id, email, name, city);
  res.redirect("/");
};

// delete a user
const getDeleteUser = async (req, res) => {
  let userId = req.params.id;
  // check có param không
  if (typeof userId == "undefined") {
    return res.redirect("/error");
  }

  let result = await deleteUser(userId);

  res.redirect("/");
};

module.exports = {
  getHomepage,
  getAddUserPage,
  postCreateUser,
  getUpdateUser,
  postUpdateUser,
  getDeleteUser,
};
