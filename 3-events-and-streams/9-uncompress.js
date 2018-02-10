const fs = require("fs");
const zlib = require("zlib");

fs
  .createReadStream("stream.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("uncompressed-stream.html"));
