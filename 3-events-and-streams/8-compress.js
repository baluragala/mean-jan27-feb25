const fs = require("fs");
const zlib = require("zlib");

fs
  .createReadStream("stream.html")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("stream.gz"));
