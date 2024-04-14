import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from "./RadioButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
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

export const Raised: Story = {
  args: {
    raised: true,
    label: "Raised",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Checked",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled",
  },
};

export const RaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    label: "Raised & Disabled",
  },
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: "Checked & Disabled",
  },
};
