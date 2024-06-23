const nodemailer = require("nodemailer");
require("dotenv").config()
const User = require("../models/user.js")

const addData = async (query)=>{
    try{await User.findOneAndUpdate({email:query.email},{
        $push:{
          query:{
            $each:[query],
            $position:0
          }
        } 
    },{new:true})}
    catch(err){
      res.status(500).josn({status:"EMAILNOTFOUND",error:err})
    }
}

const contactusAuth = async (req,res) => {
  try {
    const data = req.body;
    console.log(data);
    console.log("Inside post Contact Us");
    addData(data)
    console.log("After addData")

    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure:false,
        host:"smtp.gmail.com",
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD,
        },
      });
      console.log("After transporter")

      const mailOptions = {
        from: process.env.USER,
        to : data.email,
        subject: data.subject,
        text: `Hi User,\n Thanks for contacting us. We will resolve your issue in 5-7 working days.\n Thanks for choosing us.`,
      };

      console.log(mailOptions)

      console.log("After Mail options")

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
          res.status(500).json({ status: "Error Occurred in sending mail", error: err });
        } else {
          res.status(200).json({status:"OK"})
          console.log("Email sent: " + info.response);
        }
      });
      console.log("After send mail")

  } catch (err) {
    res.status(500).json({ status: "Error Occurred", error: err });
  }
};

module.exports = { contactusAuth };
