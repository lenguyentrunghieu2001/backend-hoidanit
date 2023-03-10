require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const configRoute = require("./config/routeGroup");
const configReqBody = require("./config/reqBody");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// config request body
configReqBody(app);

// config view engine
configViewEngine(app);

// config route group
configRoute(app);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port} ${hostname}`);
});
