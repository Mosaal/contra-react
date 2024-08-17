import type { Meta, StoryObj } from "@storybook/react";

import { Rating } from "./Rating";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Rating> = {
  title: "Components/Rating",
  component: Rating,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Normal: Story = {
  args: {
    size: "normal",
  },
};

export const Half: Story = {
  args: {
    value: 2.5,
    size: "normal",
  },
};

export const Full: Story = {
  args: {
    value: 5,
    size: "normal",
  },
};
