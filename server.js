const express = require("express");
const actionRouter = require("./projects/projectsRouter.js");
const server = express();

server.use(express.json()); // req.body
server.use("/projects", actionRouter);

module.exports = server;
