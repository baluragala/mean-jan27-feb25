var message = "Node.js is amazing";
console.log(message);

function a() {
  console.log("a");
  b();
}

function b() {
  console.log("b");
  c();
}

function c() {
  throw new Error("errro");
  console.log("c");
}

a();
