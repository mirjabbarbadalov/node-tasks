import { createServer } from "http";

let requestCount = 0;
let port = 3000;

process.argv.forEach((arg) => {
  // console.log(process.argv);
  // console.log(arg);
  if (arg.startsWith("--port=")) {
    // console.log(arg);
    const portArg = arg.split("=")[1];
    if (!isNaN(portArg)) {
      port = parseInt(portArg);
    }
  }
});

const server = createServer((req, res) => {
  if (req.url === "/") {
    requestCount++;
    res.writeHead(200, { "Content-Type": "application/json" });
    const response = {
      message: "Request handled successfully",
      requestCount,
    };
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

console.log(`Server started. Listening on port ${port}`);
