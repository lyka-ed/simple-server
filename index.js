const http = require("http");

const PORT = 8900;

const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url === "/") {
    res.write(`Hi, hi Team !!!`);
    res.end();
  } else if (req.url === "/name" && req.method === "POST") {
    res.write(
      `My name is Glory Okposin Edem. I'm am Altschool Backend Engineering student.`
    );
    res.end();
  } else {
    res.write(`404 ERROR`);
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`ever is listening at port ${PORT}`);
});
