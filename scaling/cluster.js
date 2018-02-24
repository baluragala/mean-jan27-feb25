var cluster = require("cluster");
var http = require("http");
var numCpus = require("os").cpus().length;

if (cluster.isMaster) {
  console.log("master is running with pid:", process.pid);
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }

  cluster.on("exit", function(worker, code, signal) {
    console.log("worker died with pid:", worker.process.pid);
    console.log("restarting");
    cluster.fork();
  });
} else {
  http
    .createServer(function(req, res) {
      res.write("hello world from : " + process.pid);
      res.end();
    })
    .listen(3000);
  console.log("worked is running with pid:", process.pid);
}
