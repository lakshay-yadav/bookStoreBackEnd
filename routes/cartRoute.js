const express = require("express")
const router = express.Router()
const {addToCart,cartItems,removeFromCart} = require("../controllers/cartAuth.js")

router.post('/',cartItems)

router.post('/addtocart',addToCart)

router.post('/removefromcart/',removeFromCart)

module.exports = router