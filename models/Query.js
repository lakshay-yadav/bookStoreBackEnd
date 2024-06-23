const mongoose = require("mongoose")

const querySchema = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Open","Closed"],
        default:"Open"
    }
},
{timestamps:true})


module.exports = {querySchema}
