const express = require("express");
const accountRouter = require("./accountsRouter");

// const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use("/api/accounts", accountRouter);

server.get("/", (req, res) => {
  res.send("Hello from inside the server");
});



module.exports = server;
