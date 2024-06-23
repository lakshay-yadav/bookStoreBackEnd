const express = require("express")
const router = express.Router()
const { signinAuth } = require("../controllers/signinAuth")
const {forgotPasswordAuth} = require("../controllers/forgotPasswordAuth.js")

router.post("/",signinAuth);

router.post("/forgotpassword",forgotPasswordAuth)

module.exports = router;
