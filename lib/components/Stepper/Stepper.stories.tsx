import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "./Stepper";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NormalIncrement: Story = {
  args: {
    size: "normal",
    variant: "normal",
    action: "increment",
  },
};

export const NormalIncrementDisabled: Story = {
  args: {
    disabled: true,
    size: "normal",
    variant: "normal",
    action: "increment",
  },
};

export const SmallNormalIncrement: Story = {
  args: {
    size: "small",
    variant: "normal",
    action: "increment",
  },
};

export const NormalDecrement: Story = {
  args: {
    size: "normal",
    variant: "normal",
    action: "decrement",
  },
};

export const ContainedIncrement: Story = {
  args: {
    size: "normal",
    variant: "contained",
    action: "increment",
  },
};

export const ContainedIncrementDisabled: Story = {
  args: {
    disabled: true,
    size: "normal",
    variant: "contained",
    action: "increment",
  },
};

export const SmallContainedIncrement: Story = {
  args: {
    size: "small",
    variant: "contained",
    action: "increment",
  },
};

export const ContainedDecrement: Story = {
  args: {
    size: "normal",
    variant: "contained",
    action: "decrement",
  },
};

export const NormalRaised: Story = {
  args: {
    raised: true,
    size: "normal",
    variant: "normal",
    action: "increment",
  },
};

export const NormalRaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    size: "normal",
    variant: "normal",
    action: "increment",
  },
};

export const SmallNormalRaised: Story = {
  args: {
    raised: true,
    size: "small",
    variant: "normal",
    action: "increment",
  },
};

export const ContainedRaised: Story = {
  args: {
    raised: true,
    size: "normal",
    variant: "contained",
    action: "increment",
  },
};

export const ContainedRaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    size: "normal",
    variant: "contained",
    action: "increment",
  },
};

export const SmallContainedRaised: Story = {
  args: {
    raised: true,
    size: "small",
    variant: "contained",
    action: "increment",
  },
};
