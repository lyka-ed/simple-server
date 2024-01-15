const http = require("http");
const PORT = 8900;

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.write("Hi, I'm Glory Edem a.k.a 'LYKA'");
      break;
    default:
      res.write("404 error, the url request doesn't exist.");
      break;
  }
  res.end("");
});

server.listen(PORT, null, null, () => {
  console.log("Sever is listening at port: 8900");
});
