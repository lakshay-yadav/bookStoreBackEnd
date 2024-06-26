const User = require("../models/user.js")

const addToCart = async (req,res)=>{
    const data = req.body;
    console.log("Inside post Contact Us");
    const cart = data.book
    console.log(cart)

    try{
        await User.findOneAndUpdate({email:data.email},{
            $push:{
                cart:{
                    $each:[cart],
                    $position:0
                }
            },
            book: cart._id 
        })
    }
    catch(err){
        res.status(500).json(err);
    }
}

const cartItems = async (req,res)=>{
    const data = req.body
    console.log(data)
    console.log("Inside cart items return route");

    try{
        const user = await User.find({email:data.email})
        const cart = user[0].cart;
        const sum = cart.reduce((s,item)=>{
            s = item.price + s;
            return s
        },0)
        res.status(200).json({status:"OK",cart,total:sum})   
    }
    catch(err){
        res.status(500).json(err)
    }
}

const removeFromCart = async (req,res)=>{
    const data = req.body
    console.log("Inside remove from cart");
    console.log(data);

    try{
        await User.findOneAndUpdate({email:data.email},{
            $pull:{
                cart:{
                    _id:data.product._id
                }
            }
        })

        res.status(200).json({status:"OK"})
    }
    catch(err){
        res.status(500).json(err);
    }
}

module.exports = { addToCart ,cartItems,removeFromCart};