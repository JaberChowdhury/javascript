const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { "Content-type": "text/html" });
    const q = url.parse(req.url, true).query;
    console.log(JSON.stringify(q));
    res.end("Onek kiso");
  } catch (e) {
    console.log(e);
  }
});
server.listen(5173, () => {
  console.log("server running at " + 5173);
});
