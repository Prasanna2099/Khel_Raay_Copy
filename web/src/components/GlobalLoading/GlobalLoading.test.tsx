import { render } from "@redwoodjs/testing/web";

import GlobalLoading from "./GlobalLoading";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("GlobalLoading", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<GlobalLoading />);
    }).not.toThrow();
  });
});
