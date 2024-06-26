const express = require("express")
const Book = require("../models/Book.js")
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

router.get('/book/:id',async (req,res)=>{
    const bookId = req.params.id
    console.log("Inside book detail route")
    console.log(bookId)
    
    try{
        const book = await Book.find({_id:bookId})
        console.log(book);
        res.status(200).json({status:"OK",book:book})
    }
    catch(err){
        res.status(500).json({err})
    }
})

router.get('/books/:genre',async(req,res)=>{
    const genre = req.params.genre
    console.log("Inside book genre route");
    console.log(genre)

    try{
        const books = await Book.find({genre:genre})
        console.log(books)
        res.status(200).json({books:books})
    }
    catch(err){
        res.status(500).json({err})
    }
})

module.exports = router
