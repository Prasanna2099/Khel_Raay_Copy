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

import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

// var images=[
//   {
//     alt: "Item 1",
//     id: "item1",
//     image:
//       "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
//   },
//   {
//     alt: "Item 2",
//     id: "item2",
//     image:
//       "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
//   },
//   {
//     alt: "Item 3",
//     id: "item3",
//     image:
//       "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
//   },
//   {
//     alt: "Item 4",
//     id: "item4",
//     image:
//       "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
//   },
// ]

export const Primary: Story = {};
