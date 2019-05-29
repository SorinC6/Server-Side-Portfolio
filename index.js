require("dotenv").config();

const server = require("./server.js");

const PORT = process.env.PORT || 9000;

console.log(process.env.MY_SECRET);

server.get("/", (req, res) => {
  res.send("<h1>Hello From the Server</h1>");
});

server.listen(PORT || 4000, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
