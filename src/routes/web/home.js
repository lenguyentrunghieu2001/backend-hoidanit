const express = require("express");
const {
  getHomepage,
  sample,
  postCreateUser,
} = require("../../controllers/homeController");
const router = express.Router();

// Homecontroller
router.get("/", getHomepage);
router.post("/create-user", postCreateUser);
router.get("/sample", sample);

module.exports = router;
