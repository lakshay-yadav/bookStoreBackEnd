const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const dbConnection = require("./db");

const signupRoute = require("./routes/signupRoute.js")
const bookRoute = require("./routes/bookRoute.js")
const profileRoute = require("./routes/profileRoute.js")

// DB connection
const db = dbConnection()

//Middlewares
app.use(bodyParser.json());
app.use(cors());


//Routes
app.get("/api", (req, res) => {
  res.send([{ status: "OK" }]);
});

app.use('/api/signup',signupRoute)

app.use('/api/books',bookRoute)

app.use('/api/profile',profileRoute)

app.post('/api/signin',(req,res)=>{
    const data = req.body
    console.log(data)

    res.status("200").json({status:"Ok"})
})

app.get("/api/signin", (req, res) => {
    res.json({ status: "OK" });
  });

// Starting the server
app.listen(process.env.PORT || 8000, () => {
  console.log("The server is running at ", process.env.PORT);
});
