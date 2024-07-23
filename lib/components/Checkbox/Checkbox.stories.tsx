import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

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
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Unlabeled: Story = {};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

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

export const SecondaryRaised: Story = {
  args: {
    raised: true,
    variant: "secondary",
    label: "Secondary Raised",
  },
};

export const PimaryChecked: Story = {
  args: {
    checked: true,
    variant: "primary",
    label: "Primary Checked",
  },
};

export const SecondaryChecked: Story = {
  args: {
    checked: true,
    variant: "secondary",
    label: "Secondary Checked",
  },
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
    label: "Default Checked",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    disabled: true,
    label: "Primary Disabled",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    disabled: true,
    variant: "secondary",
    label: "Secondary Disabled",
  },
};

export const RaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    label: "Raised & Disabled",
  },
};

export const PrimaryCheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    variant: "primary",
    label: "Primary & Checked & Disabled",
  },
};

export const SecondaryCheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    variant: "secondary",
    label: "Secondary & Checked & Disabled",
  },
};
