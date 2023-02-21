const express = require("express");
const {
  getHomepage,
  getAddUserPage,
  postCreateUser,
} = require("../../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.post("/create-user", postCreateUser);
router.get("/add-user", getAddUserPage);

module.exports = router;
