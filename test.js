// let http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("Hello World!"); //write a response to the client
//     res.end();
//   })
//   .listen(8080, () => {
//     console.log("Server running at http://localhost:8080/");
//   });

// let http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(req.url);
//     res.end();
//   })
//   .listen(8080);
// ! gir en / fordi vi er i root//

// let http = require("http");
// let url = require("url");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     let q = url.parse(req.url, true).query;
//     let txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

let http = require("http");
let url = require("url");
let fs = require("fs");
http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080, () => {
    console.log("Winter: http://localhost:8080/winter.html");
    console.log("Summer: http://localhost:8080/summer.html");
  });
