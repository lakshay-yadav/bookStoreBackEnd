const express = require("express")
const Book = require("../models/book")
const router = express.Router()

router.get('/',async (req,res)=>{
    try{
        const data = await Book.find()
        res.json(data)
    }
    catch(err){
        res.json({error:err})
    }
})

router.get('/:bookId',(req,res)=>{
    const bookId = req.params.bookId
})

module.exports = router