const fs = require("fs");

const writableStream = fs.createWriteStream("new-helloworld.js");
const readableStream = fs.createReadStream("../helloworld.js");

readableStream.on("data", function(chunk) {
  writableStream.write(chunk.toString());
});

readableStream.on("end", function() {
  console.log("END OF FILE");
  readableStream.close();
  writableStream.end();
});

readableStream.on("error", function(error) {
  console.log("ERROR:", error);
});

// writableStream.on("close", function() {
//   console.log("File writing completed");
// });

// writableStream.write("this is created by writable stream");
// writableStream.end();
// writableStream.destroy();
