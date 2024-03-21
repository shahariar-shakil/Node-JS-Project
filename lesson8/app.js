// http methods and postman >> for more details watch class 3
// login / register / cookie uses watch class 5
const express = require("express");
const app = express();

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "./views/register.html");
});

app.use("/login", (req, res) => {
  res.cookie("name", "rabeya");
});

// app.use("/login", (req, res) => {
//   res.statusCode = 200;
//   res.sendFile(__dirname + "./views/index.html");
// });

module.exports = app;
