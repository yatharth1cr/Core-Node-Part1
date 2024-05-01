var fs = require("fs");
const { buffer } = require("stream/consumers");

// Run async code from fs module
fs.readFile("./content.md", (error, content) => {
  console.log(content.toString(), "Async"); //Welcome to Node.js
});

// Run sync code from fs module
var readFile = fs.readFileSync("./content.md", `utf-8`);
console.log(readFile, "Sync");

// create new buffer of fixed length 10 and store it in variable named buff1 and console the buff1.
var buff1 = Buffer.alloc(10);

// write content(Welcome to Buffer) to buff1 variable.
buff1.write("Welcome to Buffer");
console.log(buff1.toString()); //Welcome to
