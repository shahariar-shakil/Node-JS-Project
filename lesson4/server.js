const http = require("http");
const { hostname } = require("os");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("<h1>hello I'm your first server</h1>");
});

myServer.listen(port, hostname, () => {
  console.log("server is running at http://${hostname}:${port}");
});
