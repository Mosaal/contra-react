import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./Tag";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Inactive: Story = {
  args: {
    children: "Inactive",
  },
};

export const Active: Story = {
  args: {
    active: true,
    children: "Active",
    onDeactivate: fn(),
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    children: "Raised",
  },
};

export const RaisedActive: Story = {
  args: {
    active: true,
    raised: true,
    children: "Raised & Active",
    onDeactivate: fn(),
  },
};

export const CustomElement: Story = {
  args: {
    as: "a",
    children: "Inactive",
    href: "javascript:void(0)",
  },
};
