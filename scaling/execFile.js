var execFile = require("child_process").execFile;

execFile("ls", function(err, stdout, stderr) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stdout);
});
