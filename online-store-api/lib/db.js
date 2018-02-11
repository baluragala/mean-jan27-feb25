const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const chalk = require("chalk");

const dbUri = "mongodb://localhost/mean-online-store-api";

mongoose.connection.on("connected", function() {
  console.log(chalk.green("Connected"));
});

mongoose.connection.on("disconnected", function() {
  console.log(chalk.green("Disconnected"));
});

mongoose.connection.on("error", function(err) {
  console.log(chalk.red("error", err));
});

mongoose.set("debug", true);

mongoose.connect(dbUri);
