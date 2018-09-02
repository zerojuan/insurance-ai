import { shallow } from "enzyme";
import React from "react";

import Header from "./Header.js";
import Link from "next/link";

describe("Header Component", () => {
  it("should have a home link", () => {
    const header = shallow(<Header />);

    const link = header.find(Link);
    expect(link.prop("href")).toBe("/");
  });

  it("should show reset button if activeChat", () => {
    const header = shallow(<Header activeChat={true} />);

    expect(header.find("#resetBtn").length).toBe(1);
    expect(header.find("#startBtn").length).toBe(0);
  });

  it("should call onReset on reset clicked", () => {
    const handler = jest.fn();
    const header = shallow(<Header activeChat={true} onReset={handler} />);
    header
      .find("#resetBtn")
      .first()
      .simulate("click");
    expect(handler).toBeCalled();
  });

  it("should call onStart on start clicked", () => {
    const handler = jest.fn();
    const header = shallow(<Header activeChat={false} onStart={handler} />);
    header
      .find("#startBtn")
      .first()
      .simulate("click");
    expect(handler).toBeCalled();
  });

  it("should show start button if !activeChat", () => {
    const header = shallow(<Header activeChat={false} />);

    expect(header.find("#resetBtn").length).toBe(0);
    expect(header.find("#startBtn").length).toBe(1);
  });
});
