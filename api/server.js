const express = require("express");

const chat = require("./chat");
const quote = require("./quote");

const server = express();

// TODO: add logging middleware

server.use("/chat", chat);

module.exports = server;
