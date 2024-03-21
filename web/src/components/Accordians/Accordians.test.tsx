import { render } from "@redwoodjs/testing/web";

import Accordians from "./Accordians";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("Accordians", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<Accordians />);
    }).not.toThrow();
  });
});
