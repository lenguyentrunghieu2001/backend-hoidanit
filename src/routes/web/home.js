const express = require("express");
const {
  getHomepage,
  getAddUserPage,
  postCreateUser,
  getUpdateUser,
  postUpdateUser,
} = require("../../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.post("/create-user", postCreateUser);
router.get("/add-user", getAddUserPage);
router.get("/update-user/:id?", getUpdateUser);
router.post("/update-db-user", postUpdateUser);

module.exports = router;
