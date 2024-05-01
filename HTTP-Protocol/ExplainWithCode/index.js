const url = require("url");

let stringUrl =
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male";

const parsedUrl = url.parse(stringUrl, "true");

console.log(parsedUrl);

// Log parsed URL information
console.log(parsedUrl.pathname); // /students/register
console.log(parsedUrl.query); //[Object: null prototype] { name: 'altcampus', gender: 'male' }
console.log(parsedUrl.host); // blog.altcampus.io:80
console.log(parsedUrl.protocol); // https:

const axios = require("axios");
// Make an HTTP GET request to Google and log the response headers
axios
  .get("https://www.google.com/")
  .then((response) => {
    console.log(response.headers);
  })
  .catch((error) => {
    console.error("Error making request:", error);
  });
