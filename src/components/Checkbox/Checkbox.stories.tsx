import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
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

export const Labeled: Story = {
  args: {
    label: "Label",
  },
};

export const WithLeftLabel: Story = {
  args: {
    label: "Label",
    labelPosition: "left",
  },
};

export const WithRightLabel: Story = {
  args: {
    label: "Label",
    labelPosition: "right",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    label: "Checked & Disabled",
    checked: true,
    disabled: true,
  },
};
