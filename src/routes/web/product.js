const express = require("express");
const { index } = require("../../controllers/productController");
const router = express.Router();

// productcontroller
router.get("/", index);

module.exports = router;
