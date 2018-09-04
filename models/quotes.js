const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
  sessionId: String,
  firstName: String,
  lastName: String,
  birthday: String,
  address: String,
  price: Number
});

const QuoteModel = mongoose.model("Quote", QuoteSchema);
module.exports = QuoteModel;
