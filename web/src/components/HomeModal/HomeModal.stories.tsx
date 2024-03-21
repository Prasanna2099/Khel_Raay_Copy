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

import HomeModal from "./HomeModal";

const meta: Meta<typeof HomeModal> = {
  component: HomeModal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HomeModal>;

export const Primary: Story = {};
