const http = require("http");

var server = http.createServer((req, res) => {
  res.end("Welcome to server sdf");
});

server.listen(4000, "localhost", () => {
  console.log("Server is listening on port 4000");
});
