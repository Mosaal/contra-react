import type { Meta, StoryObj } from "@storybook/react";

import Indicator from "./Indicator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Indicator> = {
  title: "Indicator",
  component: Indicator,
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
export const Unlabeled: Story = {
  args: {
    children: <div className="w-20 h-20 rounded-3 bg-contra-green" />,
  },
};

export const Labeled: Story = {
  args: {
    label: "99+",
    children: <div className="w-20 h-20 rounded-3 bg-contra-green" />,
  },
};

export const TopLeft: Story = {
  args: {
    position: "top-left",
    children: <div className="w-20 h-20 rounded-3 bg-contra-green" />,
  },
};

export const TopRight: Story = {
  args: {
    position: "top-right",
    children: <div className="w-20 h-20 rounded-3 bg-contra-green" />,
  },
};

export const BottomLeft: Story = {
  args: {
    position: "bottom-left",
    children: <div className="w-20 h-20 rounded-3 bg-contra-green" />,
  },
};

export const BottomRight: Story = {
  args: {
    position: "bottom-right",
    children: <div className="w-20 h-20 rounded-3 bg-contra-green" />,
  },
};
