const express = require("express");
const session = require("express-session");
const app = express();
var http = require('http').createServer(app);
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3001;
const passport = require("./passport/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

pp.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here

//Database connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbRegulate");
console.log("Connection state: " + mongoose.connection.readyState);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
