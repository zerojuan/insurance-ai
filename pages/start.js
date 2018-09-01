import MainLayout from "../components/MainLayout";

import QnA from "../components/QnA";

const qnAObject = {
  question: {
    content: "Who are you?"
  },
  answers: [],
  action: "Next",
  type: "text"
};

export default () => (
  <MainLayout>
    <QnA
      question={qnAObject.question.content}
      answers={qnAObject.answers}
      action={qnAObject.action}
      type={qnAObject.type}
    />
  </MainLayout>
);
