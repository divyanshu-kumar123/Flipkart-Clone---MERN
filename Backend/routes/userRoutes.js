const express = require("express");
const WrapAsync = require('../utils/WrapAsync.js')
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");
const { isLoggedIn } = require("../middleware/authMiddleware");


router.post("/register", WrapAsync(registerUser));
router.post("/login", WrapAsync(loginUser));
router.get("/profile", isLoggedIn, WrapAsync(getUserProfile));

module.exports = router;
