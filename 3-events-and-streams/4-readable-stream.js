const fs = require("fs");

const readableStream = fs.createReadStream(
  "C:\\Users\\balur\\Projects\\o2labs\\images\\100.jpg"
);

readableStream.on("data", function(chunk) {
  console.log(chunk.toString());
});

readableStream.on("end", function() {
  console.log("END OF FILE");
  readableStream.close();
});

readableStream.on("error", function(error) {
  console.log("ERROR:", error);
});
