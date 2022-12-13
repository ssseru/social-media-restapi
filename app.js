const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed");

const app = express();

const MONGODB_URI =
  "mongodb+srv://saisagarseru:saisagarseru@cluster0.khj0jdo.mongodb.net/messages";

// app.use(bodyParser.urlencoded());

// for application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log("Connected to DB succesfull");
    app.listen(8080);
  })
  .catch((e) => console.log(e));
