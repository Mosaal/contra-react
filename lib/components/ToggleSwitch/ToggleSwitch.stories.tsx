import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { ToggleSwitch } from "./ToggleSwitch";

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
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
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

export const Raised: Story = {
  args: {
    raised: true,
    rightLabel: "Raised",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    rightLabel: "Checked",
  },
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
    rightLabel: "Default Checked",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    rightLabel: "Disabled",
  },
};

export const RaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    rightLabel: "Raised & Disabled",
  },
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    rightLabel: "Checked & Disabled",
  },
};
