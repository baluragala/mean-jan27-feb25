const fs = require("fs");

const writableStream = fs.createWriteStream("piped-helloworld.js");
const readableStream = fs.createReadStream("../helloworld.js");

readableStream.pipe(writableStream);
