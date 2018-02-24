var spawn = require("child_process").spawn;
try {
  var ls = spawn("dir");
} catch (error) {}
ls.stdout.on("data", function(data) {
  console.log(data.toString());
});

ls.stderr.on("data", function(data) {
  console.log(data.toString());
});
