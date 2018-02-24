var socket = io("http://localhost:3000");
socket.on("welcome", function(data) {
  console.log("Server says", data);
  socket.emit("thankyou", "thanks for accepting");
});
