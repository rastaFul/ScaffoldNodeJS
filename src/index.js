require("dotenv").config();
const server = require("./server/server");

(async () => {
  app = new server();
  await app.listen();
})();
