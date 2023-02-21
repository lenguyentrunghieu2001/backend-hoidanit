const express = require("express");

const configReqBody = (app) => {
  app.use(express.json()); //utilizes the body-parser package
  app.use(express.urlencoded({ extended: true }));
};

module.exports = configReqBody;
