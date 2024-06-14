const express = require("express");
const User = require("../models/User.js");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
      const data = req.body;
      console.log(data);
      const newUser = new User(data);
  
      const savedUser = await newUser.save();
      res.status("200").json({ status: "200",savedUser });
    } catch (err) {
      console.log("Error", err);
      res.status("500").json({ error: err });
    }
  });

module.exports = router;

