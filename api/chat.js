const express = require("express");
const Router = express.Router();

Router.post("/start", (req, res) => {
  return res.sendStatus(300);
});

Router.post("/:sessionId/next", (req, res) => {
  return res.sendStatus(300);
});

module.exports = Router;
