require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
configViewEngine(app);

app.use("/", webRoutes);
// app.use("/admin", webRoutes);

connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port} ${hostname}`);
});
