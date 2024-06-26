const express = require("express");
const router = express.Router();
const {detail_change,password_change,profileData,order_history,queries} = require("../controllers/profile.js")

router.post('/',profileData)

router.post("/detail_change",detail_change);

router.post("/password_change",password_change)

router.post("/orderhistory",order_history)

router.post("/queries",queries)

module.exports = router
