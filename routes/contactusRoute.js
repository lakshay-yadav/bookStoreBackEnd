const express = require("express");
const router = express.Router();
const {contactusAuth} = require("../controllers/contactusAuth.js")

router.post("/", contactusAuth);

module.exports = router;