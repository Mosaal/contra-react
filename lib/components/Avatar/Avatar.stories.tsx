import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "CR",
  },
};

export const WithImage: Story = {
  args: {
    placeholder: "CR",
    src: "https://placehold.co/60",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "CR",
  },
};

export const Normal: Story = {
  args: {
    size: "normal",
    placeholder: "CR",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "CR",
  },
};
