const express = require("express");
const router = express.Router();

const authController = require("../controller/auth_controller");

// signup
router.post("/signup", authController.signup);
router.post("/addprofile", authController.updateProfile);
router.post("/login", authController.login);

module.exports = router;
