process.on("message", function(msg) {
  console.log("child got a message", msg);
});

process.send("Hey parent!!!");
