const express = require("express")
const router = express.Router()
const {addtowishlist,removefromwihlist,wishlistItem} = require("../controllers/wishlist.js")

router.post('/addtowishlist',addtowishlist)

router.post('/',wishlistItem)

router.post('/removefromwishlist',removefromwihlist)

module.exports = router