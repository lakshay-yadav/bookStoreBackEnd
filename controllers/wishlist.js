const User = require("../models/user.js")
const Book = require("../models/Book.js")

const addtowishlist = async (req,res)=>{
    console.log("Inside add to wishlist route");
    const data = req.body

    console.log(data.book._id);

    try{
        const user = await User.findOneAndUpdate({email:data.email},
            {
                $push:{
                    wishlist:{
                        $each:[data.book],
                        $position:0
                    }
                },
                book:data.book._id
            }
        )
        console.log(user)
        res.status(200).json({status:"OK"})
    }
    catch(err){
        res.status(500).json({err})
    }
}

const removefromwihlist = async (req,res)=>{

}

const wishlistItem = async(req,res)=>{
    const data = req.body
    console.log("Inside wishlist route");
    console.log(data);

    try{
        const user = await User.findOne({email:data.email})
        console.log(user.wishlist)
        const wishlist = []

        user.wishlist.map(async (item)=>{
            const book = await Book.findOne({_id:item._id})
            console.log(book)
            wishlist.push(book)
            console.log(wishlist)
        })
        console.log(wishlist)
        res.status(200).json({status:"OK",wishlist:wishlist})
    }
    catch(err){
        res.status(500).json({err})
    }
}

module.exports = {addtowishlist,removefromwihlist,wishlistItem}
