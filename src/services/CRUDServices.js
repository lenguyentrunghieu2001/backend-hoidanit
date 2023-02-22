const connection = require("../config/database");

// danh sách
const getAllUsers = async () => {
  const [result, fields] = await connection.query(
    "SELECT * FROM Users ORDER BY id DESC"
  );
  return result;
};

// thêm user
const addUser = async (email, name, city) => {
  let [result, fields] = await connection.query(
    `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
    [email, name, city]
  );
  return result;
};

// lấy ra 1 user
const getUserById = async (id) => {
  let [result, fields] = await connection.query(
    `SELECT * FROM Users WHERE id=? limit 1`,
    id
  );
  let user = result && result.length > 0 ? result[0] : {};
  return user;
};

const updateUser = async (array) => {
  let [result, fields] = await connection.query(
    `UPDATE Users
    SET email = ?, name = ?, city= ?
    WHERE id = ?;`,
    array
  );
};

module.exports = { getAllUsers, addUser, getUserById, updateUser };
