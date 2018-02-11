var socket = io("http://localhost:3000");

socket.on("time", function(date) {
  console.log(date);
  if (document.getElementById("time")) {
    document.getElementById("time").innerText = date;
    document.getElementById("ctime").innerText = new Date().toISOString();
  }
});

setInterval(function() {
  socket.emit("hello", "Hey server");
}, 5000);
