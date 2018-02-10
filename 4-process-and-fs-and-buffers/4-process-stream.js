process.stdin.setEncoding("utf8");

process.stdin.on("data", function(chunk) {
  process.stdout.write("Data from input ->" + chunk);
  if (chunk.trim() === "done") process.stdin.end();
});
