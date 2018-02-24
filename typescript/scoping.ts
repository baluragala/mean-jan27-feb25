// var userName;
// let customerName;
// const PI = 3.1414;

var message1 = "outer message1";
var message2 = "outer message2";

function guess() {
  var x = 10;
  if (x > 100) {
    var message1 = "x is greater than 100";
    let message2 = "x > 100 is true";
  }
  console.log(message1);
  console.log(message2);
}

guess();
