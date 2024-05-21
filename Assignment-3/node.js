var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(handleCreateServer);

function handleCreateServer(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./index.html").pipe(res);
    path.join("./index.html", "style.css");
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./about.html").pipe(res);
    path.join("./about.html", "style.css");
  } else {
    res.end("welcome");
  }
}

// Start the server
server.listen(3000, () => {
  console.log("Server is running on 3000");
});

server.listen(4000, () => {
  console.log("");
});
