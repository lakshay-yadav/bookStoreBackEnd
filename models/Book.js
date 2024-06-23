const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    "id":{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    "publication_year":{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    genre:{
        type:Array,
        required:true
    },
    cover_image:{
        type:String,
        required:true
    }
})

const Book = mongoose.model('Book',bookSchema)

module.exports = Book