import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedControl } from "./SegmentedControl";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SegmentedControl> = {
  title: "SegmentedControl",
  component: SegmentedControl,
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
export const Default: Story = {
  args: {
    options: [
      { label: "Option#1", value: "option#1" },
      { label: "Option#2", value: "option#2" },
      { label: "Option#3", value: "option#3" },
    ],
  },
};

export const Block: Story = {
  args: {
    block: true,
    options: [
      { label: "Option#1", value: "option#1" },
      { label: "Option#2", value: "option#2" },
      { label: "Option#3", value: "option#3" },
    ],
  },
  parameters: {
    layout: "padded",
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    options: [
      { label: "Option#1", value: "option#1" },
      { label: "Option#2", value: "option#2" },
      { label: "Option#3", value: "option#3" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: "Option#1", value: "option#1" },
      { label: "Option#2", value: "option#2" },
      { label: "Option#3", value: "option#3" },
    ],
  },
};

export const RaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    options: [
      { label: "Option#1", value: "option#1" },
      { label: "Option#2", value: "option#2" },
      { label: "Option#3", value: "option#3" },
    ],
  },
};

export const SingleDisabled: Story = {
  args: {
    options: [
      { label: "Option#1", value: "option#1" },
      { label: "Option#2", value: "option#2" },
      { label: "Option#3", value: "option#3", disabled: true },
    ],
  },
};

export const WithValue: Story = {
  args: {
    value: "option#2",
    options: [
      { label: "Option#1", value: "option#1" },
      { label: "Option#2", value: "option#2" },
      { label: "Option#3", value: "option#3" },
    ],
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "option#2",
    options: [
      { label: "Option#1", value: "option#1" },
      { label: "Option#2", value: "option#2" },
      { label: "Option#3", value: "option#3" },
    ],
  },
};
