const User = require("../models/user");

// danh sách
const getAllUsers = async () => {
  return await User.find({});
};

// thêm user
const addUser = async (email, name, city) => {
  await User.create({ email, name, city });
};

// lấy ra 1 user
const getUserById = async (id) => {
  return await User.findById(id).exec();
};

const updateUser = async (id, email, name, city) => {
  await User.findByIdAndUpdate(id, { email: email, name: name, city: city });
};

const deleteUser = async (id) => {
  await User.findByIdAndRemove(id);
};

module.exports = { getAllUsers, addUser, getUserById, updateUser, deleteUser };
