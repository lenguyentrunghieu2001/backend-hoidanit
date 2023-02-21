require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const configRoute = require("./config/routeGroup");
const configReqBody = require("./config/reqBody");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

configReqBody(app);
configViewEngine(app);
configRoute(app);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port} ${hostname}`);
});
