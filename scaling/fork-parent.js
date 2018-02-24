var fork = require("child_process").fork;
var path = require("path");
var child = fork(path.join(__dirname, "fork-child.js"));
child.on("message", function(msg) {
  console.log("Child says", msg);
  setInterval(function() {
    child.send("hello parent");
  }, 1000);
});
