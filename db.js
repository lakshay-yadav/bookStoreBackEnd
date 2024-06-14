const mongoose = require("mongoose");
require("dotenv").config();

function dbConnection() {
  const url = process.env.URL;

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;

  db.on("connected", () => {
    console.log("Connected to the database");
  });

  db.on("error", (err) => {
    console.log("Error in Connecting to the database ", err);
  });
}

module.exports = dbConnection;
