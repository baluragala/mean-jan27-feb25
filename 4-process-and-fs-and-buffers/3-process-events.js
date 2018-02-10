process.on("beforeExit", function(args) {
  console.log("beforeExit");
  //   setInterval(function() {
  //     console.log(new Date().toLocaleTimeString());
  //   }, 1000);
});

process.on("exit", function(args) {
  console.log("exit");
});

const fs = require("fs");
try {
  fs.createReadStream("");
} catch (err) {
  console.log("caught", err);
}
process.on("uncaughtException", function(args) {
  console.log("uncaughException", args);
});
