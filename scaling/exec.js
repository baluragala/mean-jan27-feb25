var exec = require("child_process").exec;

exec("dir", function(err, stdout, stderr) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stdout);
});
