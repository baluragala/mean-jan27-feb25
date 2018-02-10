const fs = require("fs");

console.log("starting to read dir");
// fs.readdir("D:\\", function(err, items) {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(items);
//   }
// });
var items = fs.readdirSync("C:\\");
console.log(items);
