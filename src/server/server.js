const express = require("express");
const bodyParser = require("body-parser");
const Router = require("./router");

class Server {
  server;
  port = process.env.PORT;

  constructor() {
    this.server = express();
    this.middleware();
    new Router(this.server);
  }

  middleware() {
    this.server.use(bodyParser.json());
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`server listen at port ${this.port}`);
    });
  }
}

module.exports = Server;
