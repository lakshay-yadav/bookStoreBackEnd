const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const dbConnection = require("./db");

const signupRoute = require("./routes/signupRoute.js")
const bookRoute = require("./routes/bookRoute.js")
const profileRoute = require("./routes/profileRoute.js")
const homeRoute = require("./routes/homeRoute.js")
const signinRoute = require("./routes/signinRoute.js")
const contactusRoute = require("./routes/contactusRoute.js")
const cartRoute = require("./routes/cartRoute.js")
const wishlistRoute = require("./routes/wishlistRoute.js")

// DB connection
const db = dbConnection()

// Middlewares
app.use(bodyParser.json());
app.use(cors());


//Routes
app.use("/api",homeRoute);

app.use('/api/signup',signupRoute)

app.use('/api/books',bookRoute)

app.use('/api/profile',profileRoute)

app.use("/api/signin",signinRoute);

app.use("/api/contactus",contactusRoute);

app.use('/api/cart',cartRoute)

app.use('/api/wishlist',wishlistRoute)

// Starting the server
app.listen(process.env.PORT || 8000, () => {
  console.log("The server is running at ", process.env.PORT);
});
