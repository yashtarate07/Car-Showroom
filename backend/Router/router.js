const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

// User register route
router.post("/signup", userController.userRegister);

module.exports = router;
