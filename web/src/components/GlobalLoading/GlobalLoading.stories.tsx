// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from "@storybook/react";

import GlobalLoading from "./GlobalLoading";

const meta: Meta<typeof GlobalLoading> = {
  component: GlobalLoading,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GlobalLoading>;

export const Primary: Story = {};
