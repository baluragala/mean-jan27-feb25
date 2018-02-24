var express = require("express");
var socketServer = require("socket.io");
var http = require("http");
var path = require("path");

var app = express();
var server = http.createServer(app);
var io = socketServer.listen(server);

io.on("connection", function(socket) {
  socket.emit("welcome", "Welcome to socket world");
  socket.on("disconnect", function() {
    console.log("client disconnected");
  });
  socket.on("thankyou", function(d) {
    console.log("client says", d);
  });
});

app.set("view engine", "jade");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("index");
});

server.listen(3000, function() {
  console.log("Socket is up");
});
