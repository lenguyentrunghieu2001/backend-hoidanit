const express = require("express");
const { getHomepage, sample } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);

router.get("/sample", sample);

module.exports = router;
