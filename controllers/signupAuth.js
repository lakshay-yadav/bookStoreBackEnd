const User = require("../models/user.js");

const signupAuth = async (req, res) => {
  const data = req.body;
  console.log(data);
  console.log("Inside post signup");

  try {
    const user = await User.find({email:data.email});
    console.log(user);
    if (user.length) {
      res.status(200).json({ status: "Already exists", user });
    } else {
      const newUser = new User(data);

      const savedUser = await newUser.save();

      res.status(200).json({status:"OK",savedUser})
    }
  } catch (err) {
    console.log("Error occurred");
    res.status(400).json([{ status: "Error", error: err }]);
  }
};



module.exports = { signupAuth };
