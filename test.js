let http = require("http");
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end();
  })
  .listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
  });
