import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Slider> = {
  title: "Slider",
  component: Slider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const Range: Story = {
  args: {
    range: true,
  },
};

export const Raised: Story = {
  args: {
    raised: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 50,
  },
};

export const RaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    defaultValue: 50,
  },
};

export const WithValue: Story = {
  args: {
    value: 50,
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 50,
  },
};
