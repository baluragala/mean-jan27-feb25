/*
 we need to create a module called logger

    info(message) -> INFO : message
    warn(message) -> WARN : message
    error(message) -> ERR : message

*/

var chalk = require("chalk");

function info(message) {
  console.log(chalk.green("INFO :" + message));
}

function warn(message) {
  console.log(chalk.yellow("WARN :" + message));
}

function error(message) {
  console.log(chalk.red("ERROR :" + message));
}

module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;
