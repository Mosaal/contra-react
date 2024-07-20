import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./Tag";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Inactive: Story = {
  args: {
    label: "Inactive",
  },
};

export const Active: Story = {
  args: {
    active: true,
    label: "Active",
    onDeactivate: fn(),
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    label: "Raised",
  },
};

export const RaisedActive: Story = {
  args: {
    active: true,
    raised: true,
    label: "Raised & Active",
    onDeactivate: fn(),
  },
};
