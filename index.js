const http = require("http");

const PORT = 8900;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write(`Hi, hi Team !!!`);
      break;
    case "/name":
      res.write(
        `My name is Glory Okposin Edem. I'm am Altschool Backend Engineering student.`
      );
      break;
    default:
      res.statusCode = 404;
      break;
  }
  res.end();
});
//   if (req.url === "/") {
//     res.write(`Hi, hi Team !!!`);
//     res.end();
//   } else if (req.url === "/name" && req.method === "POST") {
//     res.write(
//       `My name is Glory Okposin Edem. I'm am Altschool Backend Engineering student.`
//     );
//     res.end();
//   } else {
//     res.write(`404 ERROR`);
//     res.end();
//   }
// });
server.listen(PORT, () => {
  console.log(`Sever is listening at port ${PORT}`);
});
