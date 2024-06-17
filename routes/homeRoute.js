const express = require("express")
const router = express.Router()
const Book = require('../models/Book.js')

router.get('/', async (req,res)=>{
    // res.json({status:"Ok"})
    // console.log("Home route");/
    console.log("Inside home route")
    const data = await Book.find()
    
    res.json(data);
})

module.exports = router;
