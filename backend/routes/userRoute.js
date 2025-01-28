const express = require("express");
const router = express.Router();
const { signupUser, loginUser } = require("../controllers/userController");

// Sign Up route
router.post("/signup", signupUser);

// Login route
router.post("/login", loginUser);

module.exports = router;
