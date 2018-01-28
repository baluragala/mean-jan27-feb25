var EventEmitter = require("events").EventEmitter;
var eventEmitter = new EventEmitter();

eventEmitter.once("STARTED", function(eventArgs) {
  console.log("1.Ok, carry on!!", eventArgs);
  //eventArgs.recepient1 = true;
});
eventEmitter.on("STARTED", function(eventArgs) {
  console.log("2.Ok, carry on!!", eventArgs);
});
eventEmitter.on("STARTED", function(eventArgs) {
  console.log("3.Ok, carry on!!", eventArgs);
});
eventEmitter.on("STARTED", function(eventArgs) {
  console.log("4.Ok, carry on!!", eventArgs);
});

console.log("Total Listeners", eventEmitter.listenerCount("STARTED"));
eventEmitter.emit("STARTED", { where: "TO OFFICE" });
eventEmitter.emit("STARTED", { where: "TO OFFICE" });
eventEmitter.emit("STARTED", { where: "TO OFFICE" });

// function onlyOnce() {
//   console.log("You'll never see this again");
//   eventEmitter.removeListener("firstConnection", onlyOnce);
// }

// eventEmitter.on("firstConnection", onlyOnce);
// console.log("Total Listeners", eventEmitter.listenerCount("firstConnection"));
// eventEmitter.emit("firstConnection");
// console.log("Total Listeners", eventEmitter.listenerCount("firstConnection"));
// eventEmitter.emit("firstConnection");
