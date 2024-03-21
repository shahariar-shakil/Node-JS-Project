const http = require("http");
const fs = require("fs");
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.end("welcome to server");
});

server.listen(PORT, () => {
  console.log(`server is running`);
});
