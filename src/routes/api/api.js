const express = require("express");
const routerApi = express.Router();
const { getUsers } = require("../../controllers/apiController");

routerApi.get("/", (req, res) => {
  return res.status(200).json({
    data: "hello world",
    version: "1.0.0",
  });
});

routerApi.get("/users", getUsers);
module.exports = routerApi;
