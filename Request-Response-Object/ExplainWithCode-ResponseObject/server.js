let http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  // Set status code to 201
  res.statusCode = 201;
  // Set content type header to HTML
  res.setHeader("Content-type", "text/html");

  // Send HTML content i
  res.end("<h1>Welcome to Response obj</h1>");
});

server.listen(4444, () => {
  console.log("Server listening on port 4444");
});
