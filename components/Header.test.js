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
});
