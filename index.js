require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const axios = require("axios");
const morgan = require("morgan");
const User = require("./models/user");

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Express Session
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
  })
);

app.post("/signup", function(req, res) {
  User.create({
    uid: req.body.uid,
    fortniteUsername: req.body.fortniteUsername,
    displayName: req.body.displayName
  }).then(user => {
    console.log(user);
    res.send(user);
  });
});

app.post("/signin", function(req, res) {
  console.log("test!");
  console.log(req.body.uid);
  User.findOne({ where: { uid: req.body.uid } }).then(
    ({ fortniteUsername, displayName }) => {
      res.send({ fortniteUsername, displayName });
    }
  );
});

app.listen(3001, () => {
  console.log("Listening on port 3001...");
});
