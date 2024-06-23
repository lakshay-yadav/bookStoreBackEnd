const User = require("../models/user.js");

const signupAuth = async (req, res) => {
  const data = req.body;
  console.log(data);
  console.log("Inside post signup");

  try {
    const user = await User.find({email:data.email});
    console.log(user);
    if (user.length) {
      console.log("Already exists")
      res.status(200).json({ status: "EXISTS", user });
    } else {
      console.log("Adding new user")
      const newUser = new User(data);
      console.log("After newUser dec")
      const savedUser = await newUser.save();
      console.log("After saving")

      res.status(200).json({status:"OK",savedUser})
    }
    
  } catch (err) {
    console.log("Error occurred");
    res.status(400).json([{ status: "Error", error: err }]);
  }
};


module.exports = { signupAuth };
