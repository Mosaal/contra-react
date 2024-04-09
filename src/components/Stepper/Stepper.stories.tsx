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
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OutsideSingle: Story = {
  args: {
    type: "outside",
    steps: "single",
  },
};

export const SmallOutsideSingle: Story = {
  args: {
    size: "small",
    type: "outside",
    steps: "single",
  },
};

export const OutsideDouble: Story = {
  args: {
    type: "outside",
    steps: "double",
  },
};

export const SmallOutsideDouble: Story = {
  args: {
    size: "small",
    type: "outside",
    steps: "double",
  },
};

export const InsideSingle: Story = {
  args: {
    type: "inside",
    steps: "single",
  },
};

export const SmallInsideSingle: Story = {
  args: {
    size: "small",
    type: "inside",
    steps: "single",
  },
};

export const InsideDouble: Story = {
  args: {
    type: "inside",
    steps: "double",
  },
};

export const SmallInsideDouble: Story = {
  args: {
    size: "small",
    type: "inside",
    steps: "double",
  },
};
