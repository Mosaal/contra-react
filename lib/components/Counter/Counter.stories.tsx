import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import Counter from "./Counter";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Counter> = {
  title: "Counter",
  component: Counter,
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
export const Normal: Story = {
  args: {
    size: "normal",
    variant: "normal",
  },
};

export const NormalDisabled: Story = {
  args: {
    disabled: true,
    size: "normal",
    variant: "normal",
  },
};

export const SmallNormal: Story = {
  args: {
    size: "small",
    variant: "normal",
  },
};

export const Contained: Story = {
  args: {
    size: "normal",
    variant: "contained",
  },
};

export const ContainedDisabled: Story = {
  args: {
    disabled: true,
    size: "normal",
    variant: "contained",
  },
};

export const SmallContained: Story = {
  args: {
    size: "small",
    variant: "contained",
  },
};

export const NormalWithValue: Story = {
  args: {
    value: 10,
    size: "normal",
    variant: "normal",
  },
};

export const NormalWithDefaultValue: Story = {
  args: {
    defaultValue: 10,
    size: "normal",
    variant: "normal",
  },
};

export const ContainedWithValue: Story = {
  args: {
    value: 10,
    size: "normal",
    variant: "contained",
  },
};

export const ContainedWithDefaultValue: Story = {
  args: {
    defaultValue: 10,
    size: "normal",
    variant: "contained",
  },
};

export const NormalRaised: Story = {
  args: {
    raised: true,
    size: "normal",
    variant: "normal",
  },
};

export const NormalRaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    size: "normal",
    variant: "normal",
  },
};

export const SmallNormalRaised: Story = {
  args: {
    raised: true,
    size: "small",
    variant: "normal",
  },
};

export const ContainedRaised: Story = {
  args: {
    raised: true,
    size: "normal",
    variant: "contained",
  },
};

export const ContainedRaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    size: "normal",
    variant: "contained",
  },
};

export const SmallContainedRaised: Story = {
  args: {
    raised: true,
    size: "small",
    variant: "contained",
  },
};
