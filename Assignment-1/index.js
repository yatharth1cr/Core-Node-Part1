console.log("Welcome to Node.js");

const os = require("os");

// Get the number of CPUs
const numberOfCPUs = os.cpus().length;
console.log("Number of CPUs:", numberOfCPUs);

// Get the amount of free memory in bytes
const freeMemory = os.freemem();
console.log("Free Memory:", freeMemory, "bytes");

// Get the system uptime in seconds
const uptime = os.uptime();
console.log("Uptime:", uptime, "seconds");

// Get the operating system version
const osVersion = os.version();
console.log("OS Version:", osVersion);

const fs = require("fs");
console.log(
  fs.readFile("./index.md", (error, content) => {
    console.log(content);
  })
);
console.log(fs.unlink());

let buff1 = Buffer.alloc(12);
buff1.write("welcome to Node.js");
console.log(buff1.toString());
console.log(buff1);

// Blocking code example
console.log("Start reading file synchronously...");
const data = fs.readFileSync("content.md", "utf8");
console.log("File content (synchronously):", data);

// Non-blocking code example
console.log("Start reading file asynchronously...");
fs.readFile("content.md", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file asynchronously:", err);
    return;
  }
  console.log("File content (asynchronously):", data);
});
console.log("End reading file asynchronously.");
