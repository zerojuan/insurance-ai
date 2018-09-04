const mongoose = require("mongoose");
const express = require("express");
const shortid = require("shortid");
const mustache = require("mustache");
const Router = express.Router();

const questionsModel = require("../models/questions");
const QuoteModel = mongoose.model("Quote");

Router.post("/start", async (req, res) => {
  // create a session
  const quote = new QuoteModel({
    sessionId: shortid.generate()
  });

  await quote.save();

  return res.send(quote);
});

Router.post("/:sessionId/next", async (req, res) => {
  // get the possible request
  const chat = req.body.chat;
  const step = req.body.step || 1;
  const sessionId = req.params.sessionId;

  const quote = await QuoteModel.findOne({
    sessionId: req.params.sessionId
  });

  if (!quote) {
    return res.sendStatus(404);
  }

  if (!chat && !step) {
    return res.sendStatus(400);
  }

  // a null chat means this is the first question
  let nextQuestion;
  if (!chat) {
    nextQuestion = questionsModel.getById(step);
  } else {
    // save the answer to our model
    req.log.debug(`Updating quote: ${sessionId}`);
    chat.content.answers.forEach(answer => {
      quote.set({
        [`${answer.attribute}`]: answer.value
      });
    });

    await quote.save();

    // get next question
    nextQuestion = questionsModel.getById(chat.question.next.success);
  }

  // inflate answers with values from database
  nextQuestion.content.answers = nextQuestion.content.answers.map(answer => {
    // if db prepopulated the value, don't change
    if (!answer.value) {
      answer.value = quote[answer.attribute];
    }

    // for instances that we want to show dynamic text to the user
    if (answer.dynamic) {
      answer.value = mustache.render(answer.value, quote);
    }

    return answer;
  });

  if (nextQuestion.question.dynamic) {
    // Example: {{firstname}}, welcome to the chat
    nextQuestion.question.content = mustache.render(
      nextQuestion.question.content,
      quote
    );
  }

  if (!nextQuestion) {
    return res.sendStatus(404);
  }

  return res.send(nextQuestion);
});

module.exports = Router;
