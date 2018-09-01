import { shallow, mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Index from "../pages/index.js";
import Header from "../components/Header";

describe("Index Page", () => {
  it("should show start button", () => {
    const index = mount(<Index />);

    expect(index.find("a#startBtn").length).toBe(1);
  });
});
