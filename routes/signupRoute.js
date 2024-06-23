const express = require("express");
const User = require("../models/user.js");
const router = express.Router();
const { signupAuth } = require("../controllers/signupAuth.js");

router.post("/", signupAuth);

module.exports = router;
