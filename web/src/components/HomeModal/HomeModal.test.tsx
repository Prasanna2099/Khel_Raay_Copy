import { render } from "@redwoodjs/testing/web";

import HomeModal from "./HomeModal";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("HomeModal", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<HomeModal />);
    }).not.toThrow();
  });
});
