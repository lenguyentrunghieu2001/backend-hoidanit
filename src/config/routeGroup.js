const homeRouter = require("../routes/web/home");
const productRouter = require("../routes/web/product");

const configRoute = (app) => {
  app.use("/", homeRouter);
  app.use("/product", productRouter);
};

module.exports = configRoute;
