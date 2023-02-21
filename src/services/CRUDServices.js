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

module.exports = { getAllUsers, addUser };
