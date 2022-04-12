const fs = require("fs");

let array = fs.readFileSync(process.argv[2]).toString().split("\n").length - 1;

console.log(array);