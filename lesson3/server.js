const http = require("http");

const myServer = http.createServer((req, res) => {
  res.end("hello I'm your first server!");
});

myServer.listen(3000, () => {
  console.log("server is running at localhost:3000");
});
