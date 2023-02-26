const homeRouter = require("../routes/web/home");
const productRouter = require("../routes/web/product");
const error = require("../routes/web/error");
const kittenRouter = require("../routes/web/kitten");

const configRoute = (app) => {
  app.use("/", homeRouter);
  // app.use("/product", productRouter);
  // app.use("/error", error);
  // app.use("/", kittenRouter);
};

module.exports = configRoute;
