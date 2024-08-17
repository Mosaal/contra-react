import type { Meta, StoryObj } from "@storybook/react";

import { Indicator } from "./Indicator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Indicator> = {
  title: "Components/Indicator",
  component: Indicator,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Square = () => (
  <div className="cr-h-20 cr-w-20 cr-rounded-3 cr-bg-green" />
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: <Square />,
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    children: <Square />,
  },
};

export const Labeled: Story = {
  args: {
    label: "99+",
    children: <Square />,
  },
};

export const RaisedLabeled: Story = {
  args: {
    raised: true,
    label: "99+",
    children: <Square />,
  },
};

export const TopLeft: Story = {
  args: {
    position: "top-left",
    children: <Square />,
  },
};

export const TopRight: Story = {
  args: {
    position: "top-right",
    children: <Square />,
  },
};

export const BottomLeft: Story = {
  args: {
    position: "bottom-left",
    children: <Square />,
  },
};

export const BottomRight: Story = {
  args: {
    position: "bottom-right",
    children: <Square />,
  },
};

export const WithOffsetX: Story = {
  args: {
    offsetX: "1rem",
    children: <Square />,
  },
};

export const WithOffsetY: Story = {
  args: {
    offsetY: "1rem",
    children: <Square />,
  },
};

export const WithOffsetXY: Story = {
  args: {
    offsetX: "1rem",
    offsetY: "1rem",
    children: <Square />,
  },
};
