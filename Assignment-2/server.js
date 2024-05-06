var http = require("http");

var fs = require("fs");
var url = require("url");
const server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname, req.url);
  console.log(parsedUrl.query);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(parsedUrl.query));
});

server.listen(2345, () => {
  console.log("Server listening on port 2345");
});
