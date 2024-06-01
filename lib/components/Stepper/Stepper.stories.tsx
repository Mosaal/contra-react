import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import Stepper from "./Stepper";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Stepper> = {
  title: "Stepper",
  component: Stepper,
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
export const NormalIncrement: Story = {
  args: {
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
