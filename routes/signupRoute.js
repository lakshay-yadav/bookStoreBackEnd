const express = require("express");
const router = express.Router();
const { signupAuth } = require("../controllers/signupAuth.js");

router.post("/", signupAuth);

router.get('/',(req,res)=>{
    res.json({status:"OK"})
})

module.exports = router;
