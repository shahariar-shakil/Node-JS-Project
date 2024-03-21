// http request with query parameters class 6
const express = require("express");
const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("I am home route");
// });

// app.listen(PORT, () => {
//   console.log(`server is running at http://localhost:${PORT}`);
// });

// http request with route parameters class 7

// app.get("/userID/:id/userAge/:age", (req, res) => {
//   const id = req.params.id;
//   const age = req.params.age;

//   res.send(`<h1>Student id is : ${id}, age is : ${age} </h1>`);
// });

// how to make post request from Json or form class 8
// app.post("/user", (req, res) => {
//   const name = req.body.name;
//   res.send(`welcome ${name}`);
// });

// how to send and receive form data class 9
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  res.send("hello i'm okay!");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
