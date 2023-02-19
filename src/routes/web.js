const express = require("express");
const { getHomepage, sample } = require("../controllers/homeController");
const { index } = require("../controllers/productController");
const router = express.Router();

// Homecontroller
router.get("/", getHomepage);
router.get("/sample", sample);
// productcontroller
router.get("/product", index);

module.exports = router;
