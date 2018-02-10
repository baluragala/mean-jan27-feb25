const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "jade");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res, next) {
  res.render("index", {
    title: "Retail CMS",
    subTitle: "An online retail app"
  });
});

app.use("/products", require("./routes/products"));

app.listen(3000, function() {
  console.log("App starts on port 3000");
});
