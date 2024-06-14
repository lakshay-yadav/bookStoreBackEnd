const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        const data = await User.find()
        res.json(data)
    }
    catch(err){
        res.json({error:err})
    }
})

module.exports = router