const { parse } = require("path");
const url = require("url");

var parsedUrl = url.parse(
  "https://airindia.com/fares/calculate?from=delhi&to=detroitand"
);

console.log(parsedUrl.query); // from=delhi&to=detroitand
console.log(parsedUrl.pathname); // /fares/calculate
console.log(parsedUrl.protocol); // https:
console.log(url.parse(parsedUrl.query));
