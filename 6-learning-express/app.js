var express = require("express");

var app = express();

app.get("/about", function(req, res) {
  res.send("Hello express - about");
});

app.get("/home", function(req, res) {
  res.send("Hello express - home");
});

app.get("/contact-us", function(req, res) {
  res.send("Hello express - contact");
});
app.listen(3000, function() {
  console.log("Express app is up and running on port 3000");
});
