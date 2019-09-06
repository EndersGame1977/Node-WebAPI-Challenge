const express = require("express");
const actionRouter = require("./actions/actionsRouter.js");
const server = express();

server.use(express.json()); // req.body
server.use("/action", actionRouter);

module.exports = server;
