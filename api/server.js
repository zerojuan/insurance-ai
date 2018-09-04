const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("pino")({
  level: process.env.LOG_LEVEL || "info"
});
const pinoExpress = require("express-pino-logger")({ pino });

// setup quotes
require("../models/quotes");

const chat = require("./chat");
const quotes = require("./quotes");

// connect to database
function connect() {
  mongoose.connect(process.env.MONGO_URI);
  return mongoose.connection;
}

const connection = connect();
connection.on("error", pino.error).on("disconnected", connect);

const server = express();
// server.use(pinoExpress);
server.use(bodyParser.json());

// TODO: add logging middleware

server.use("/api/chat", pinoExpress, chat);
server.use("/api/quotes", pinoExpress, quotes);

module.exports = server;
