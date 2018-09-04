// TODO: use a real backend
const questions = [
  {
    id: "1",
    question: {
      content: "What is your name?",
      next: {
        success: "2"
      }
    },
    content: {
      type: "text",
      answers: [
        {
          attribute: "firstName"
        },
        {
          attribute: "lastName"
        }
      ]
    },
    action: "Next"
  },
  {
    id: "2",
    question: {
      dynamic: true,
      content: "Hello {{firstName}}. Now we need your date of birth.",
      next: {
        success: "3"
      }
    },
    content: {
      type: "date",
      answers: [
        {
          attribute: "birthday",
          validationFailedMsg:
            "Woops, unfortunately we don't insure anyone under 18"
        }
      ]
    },
    action: "Next"
  },
  {
    id: "3",
    question: {
      content: "Where do you live?",
      next: {
        success: "5"
      }
    },
    content: {
      type: "text",
      answers: [
        {
          attribute: "address"
        }
      ]
    },
    action: "Next"
  },
  {
    id: "5",
    question: {
      dynamic: true,
      content: "Great {{firstName}}, have a look at our quote."
    },
    content: {
      type: "link",
      answers: [
        {
          attribute: "quote",
          title: "Insure Me!",
          value: "/quote/{{sessionId}}",
          dynamic: true
        }
      ]
    },
    action: "Bye"
  }
];

module.exports = {
  getById: id => {
    return questions.find(question => {
      return question.id === id;
    });
  }
};
