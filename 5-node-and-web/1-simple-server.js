var http = require("http");

function handleRequest(request, response) {
  switch (request.url) {
    case "/":
      response.write("<h1>Welcome to node!!!</h1>");
      break;
    case "/about":
      response.write("<h1>Welcome to node!!!</h1>");
      response.write("<p>This an example of node and web</p>");
      break;
  }

  response.end();
}

var server = http.createServer(handleRequest);
server.listen(3000);
