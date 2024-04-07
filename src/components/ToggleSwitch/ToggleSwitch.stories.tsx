import type { Meta, StoryObj } from "@storybook/react";

import ToggleSwitch from "./ToggleSwitch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ToggleSwitch> = {
  title: "ToggleSwitch",
  component: ToggleSwitch,
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
export const Unlabeled: Story = {};

export const WithLeftLabel: Story = {
  args: {
    leftLabel: "Label",
  },
};

export const WithRightLabel: Story = {
  args: {
    rightLabel: "Label",
  },
};

export const WithBothLabels: Story = {
  args: {
    leftLabel: "Left Label",
    rightLabel: "Right Label",
  },
};

export const Checked: Story = {
  args: {
    leftLabel: "Checked",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    leftLabel: "Disabled",
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    leftLabel: "Checked & Disabled",
    checked: true,
    disabled: true,
  },
};
