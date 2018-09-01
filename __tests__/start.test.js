import { shallow, mount } from "enzyme";

import Start from "../pages/start";
import QnA from "../components/QnA";

describe("Start Page", () => {
  it("should show a reset button", () => {
    const start = mount(<Start />);

    expect(start.find("a#resetBtn").length).toBe(1);
  });

  it("should show question", () => {
    const start = shallow(<Start />);

    expect(start.find(QnA).length).toBe(1);
  });
});
