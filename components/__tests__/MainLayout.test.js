import { shallow } from "enzyme";

import MainLayout from "../MainLayout";
import Header from "../Header";

describe("MainLayout", () => {
  it("should have a Header", () => {
    const layout = shallow(<MainLayout />);
    expect(layout.find(Header).length).toBe(1);
  });

  it("should render contents", () => {
    const layout = shallow(
      <MainLayout>
        <p>Content</p>
      </MainLayout>
    );
    expect(layout.find("p").text()).toBe("Content");
  });
});
