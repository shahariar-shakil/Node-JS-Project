// environmnet set up
require("dotenv").confiq();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.send("/", (req, res) => {
  res.send("hello I'm your friend");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
