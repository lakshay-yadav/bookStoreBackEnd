const express = require("express")
const router = express.Router()
const { signinAuth } = require("../controllers/signinAuth")


router.post("/",signinAuth);

module.exports = router;
