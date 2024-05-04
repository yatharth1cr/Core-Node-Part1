var http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.headers, request.method, request.url);
  response.end("Welcome to server");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
