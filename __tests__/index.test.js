import { mount } from "enzyme";
import React from "react";
import mockAxios from "jest-mock-axios";

import Index from "../pages/index.js";
console.log("Test");
// MOCK ENVIRONMENT VARIABLE
jest.mock("../lib/env");

describe("Index Page", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should show start button", () => {
    const index = mount(<Index />);

    expect(index.find("a#startBtn").length).toBe(1);
  });

  it("should start the chat on start clicked", () => {
    const index = mount(<Index />);
    index
      .find("a#startBtn")
      .first()
      .simulate("click");

    // called the mock api
    expect(mockAxios.post).toHaveBeenCalledWith("/chat/start");

    // TODO: test moving to next route
  });
});
