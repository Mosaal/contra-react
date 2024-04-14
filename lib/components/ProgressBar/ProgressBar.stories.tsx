import type { Meta, StoryObj } from "@storybook/react";

import ProgressBar from "./ProgressBar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",
  component: ProgressBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Half: Story = {
  args: {
    value: 0.5,
  },
};

export const Full: Story = {
  args: {
    value: 1,
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    value: 0.5,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 0.5,
  },
};

export const RaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    value: 0.5,
  },
};
