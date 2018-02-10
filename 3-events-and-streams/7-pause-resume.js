const fs = require("fs");

var stream = fs.createReadStream("stream.html");

stream.on("data", function(chunk) {
  console.log("Received " + chunk.length + " bytes of data.");
  //console.log(chunk.toString());
  stream.pause();
  console.log("paused");
  setTimeout(function() {
    console.log("resumed");
    stream.resume();
  }, 1000);
});
