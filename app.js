import http from "http";

const server = http
  .createServer((req, res) => {
    res.end("Thinhj DDEpj trai");
  })
  .listen(4001);

console.log("Server is up and running");

export default server;
