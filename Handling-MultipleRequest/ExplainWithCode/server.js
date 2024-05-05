var http = require("http");

var url = require("url");

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url);
  console.log(req.method, req.url, parsedUrl);
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(201, { "Content-type": "text/plain" });
    res.end("Welcome to homepage");
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("This is all about Node.JS");
  } else if (req.method === "POST" && parsedUrl.pathname === "/about") {
    res.writeHead(201, { "Content-type": "text/plain" });
    res.end("message: this is a post request");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}

const server = http.createServer(handleRequest);
server.listen(5000, () => {
  console.log("Server is istening on localhost 5k");
});
