const http = require("http");
const fs = require("fs");
const port = 8012;
const requestHandle = (req, res) => {
  //   res.write("<h1>Hello From Server</h1>");
  //   res.write("<h1>Name:- John Wick</h1>");
  //   res.write("<h1>Age:- 43</h1>");
  let fileName = "";
  switch (req.url) {
    case "/":
      fileName = "index.html";
      break;

    case "/home":
      fileName = "home.html";
      break;
    case "/about":
      fileName = "about.html";
      break;
    case "/contact":
      fileName = "contact.html";
      break;

    default:
      fileName = "error.html";
  }
//   to not load the file or server
  fs.readFile(fileName, (err, result) => {
    if (!err) {
      res.end(result);
    }
  });
};

//creat server
const server = http.createServer(requestHandle);
server.listen(port, (err) => {
  if (err) {
    console.log("server not response");
    return false;
  }
  console.log("server starts on port : " + port);
});
