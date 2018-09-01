import { shallow } from "enzyme";
import QnA from "./QnA";

describe("QnA", () => {
  let qnaFixture;
  const qnaObject = {
    question: {
      content: "Who are you?"
    },
    answers: [],
    type: "text",
    action: "Next"
  };

  beforeAll(() => {
    qnaFixture = shallow(
      <QnA
        question={qnaObject.question.content}
        answers={qnaObject.answers}
        action={qnaObject.action}
        type={qnaObject.type}
      />
    );
  });
  it("should show an action button", () => {
    expect(qnaFixture.find(".actionBtn").text()).toBe(qnaObject.action);
  });
  it("should show a question header", () => {
    expect(qnaFixture.find(".question").text()).toBe(
      qnaObject.question.content
    );
  });
  it("should show answers panel", () => {
    expect(qnaFixture.find(".actions").length).toBe(1);
  });
});
