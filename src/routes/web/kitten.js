const express = require("express");
const { index } = require("../../controllers/kittenController");

const router = express.Router();

router.get("/", index);

module.exports = router;
