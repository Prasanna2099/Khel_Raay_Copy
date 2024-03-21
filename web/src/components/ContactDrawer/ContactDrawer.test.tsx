import { render } from "@redwoodjs/testing/web";

import ContactDrawer from "./ContactDrawer";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("ContactDrawer", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<ContactDrawer />);
    }).not.toThrow();
  });
});
