import { mount } from "enzyme";
import React from "react";

import Index from "../pages/index.js";

describe("Index Page", () => {
  it("should show start button", () => {
    const index = mount(<Index />);

    expect(index.find("a#startBtn").length).toBe(1);
  });
});
