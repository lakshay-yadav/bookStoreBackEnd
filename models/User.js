const mongoose = require('mongoose')
const {querySchema} = require("./Query.js")
const {cartSchema,wishlistSchema} = require("./Order.js")

const addressSchema = mongoose.Schema({
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String
    },
    pincode:{
        type:Number,
        required:true
    }
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already exists"],
        lowercase:true
    },
    gender:{
        type:String,
        enum : ["Male","Female","Others"]
    },
    password:{
        type:String,
        required:true
    },
    query:[querySchema],
    cart:[cartSchema],
    phoneNumber:{
        type:String,
        default:"0000000000"
    },
    address:[addressSchema],
    purchases:{
        type:Array,
        default:[]
    },
    wishlist:[wishlistSchema]
},
{
    timestamps:true
}
);

const User = mongoose.model('User',userSchema);

module.exports = User;

