const express = require("express");
<<<<<<< HEAD
=======
const User = require("../models/User.js");
>>>>>>> bb4f0a2fb461927b9439aed558dd3ee6619b9d4d
const router = express.Router();
const { signupAuth } = require("../controllers/signupAuth.js");

router.post("/", signupAuth);

router.get('/',(req,res)=>{
    res.json({status:"OK"})
})

module.exports = router;
