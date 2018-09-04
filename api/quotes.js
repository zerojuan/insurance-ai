const mongoose = require("mongoose");
const express = require("express");
const Router = express.Router();

const QuoteModel = mongoose.model("Quote");

Router.get("/:sessionId", async (req, res) => {
  const quote = await QuoteModel.findOne({
    sessionId: req.params.sessionId
  });

  if (!quote) {
    return res.sendStatus(404);
  }

  // calculate the quote value, based on age
  const { birthday } = quote;
  const [day, month, year] = birthday.split("-").map(d => parseInt(d, 10));

  quote.price = 10; // minimum price
  if (year >= 1983 && year <= 1997) {
    // millenial
    quote.price = 1000;
  } else if (year < 1983) {
    quote.price = 20;
  } else if (year >= 1997) {
    quote.price = 1500;
  }

  return res.send(quote);
});

module.exports = Router;
