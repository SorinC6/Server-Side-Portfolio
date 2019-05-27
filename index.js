require("dotenv").config();

const server = require("./api/server.js");

const PORT = process.env.PORT || 9000;

console.log(process.env.MY_SECRET);

server.listen(PORT || 4000, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
