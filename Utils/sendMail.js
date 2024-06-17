const nodemailer = require("nodemailer");
require("dotenv").config()

const sendMail = ()=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure:false,
        host:"smtp.gmail.com",
        auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.USER,
        // to : data.email,
        to: "lakshay.gametattav@gmail.com",
        subject: "Query",
        text: `Hi Bro,\n Thanks for contacting us. We will resolve your issue in 5-7 working days.\n Thanks for choosing us.`,
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
          res.status(500).json({ status: "Error Occurred", error: err });
        } else {
          res.status(200).json({status:"OK"})
          console.log("Email sent: " + info.response);
        }
      });
}

module.exports = {sendMail}