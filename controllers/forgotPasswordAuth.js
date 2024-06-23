const User = require("../models/user.js");

const forgotPasswordAuth = async (req, res) => {
  const data = req.body;
  console.log("Inside forgot password route");
  console.log(data);

  try {
    const user = await User.find({ email: data.email });
    if (user.length) {
        try{
            await User.findOneAndUpdate({email:data.email},{
                password:data.password
            })
            res.status(200).json({status:"OK"})
        }catch(error){
            res.status(400).json({ status: "ERROR", error: err });
        }
    } else {
      res.status(404).json({ status: "EMAILNOTFOUND" });
    }
  } catch (err) {
    res.status(400).json({ status: "ERROR", error: err });
  }
};

module.exports = { forgotPasswordAuth };
