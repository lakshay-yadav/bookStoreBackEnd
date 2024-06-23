const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    },
    quantity:{
        type:Number,
        default:1
    },
    price:Number,
    title:{
        type:String
    },
    author:{
        type:String
    }
})

const wishlistSchema = new mongoose.Schema({
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }
})

const Cart = mongoose.model("cart",cartSchema);

const orderSchema = new mongoose.Schema({
    books:[cartSchema],
    orderid:Number,
    amount:Number,
    address:Object,
    status:{
        type:String,
        default:"Recieved",
        enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Recieved"]
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    payment:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})

const Order = mongoose.model("Order",orderSchema);

module.exports = {cartSchema,Cart,Order,wishlistSchema}