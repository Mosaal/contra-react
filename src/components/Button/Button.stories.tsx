import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

const LeftChevronIcon = ({ className }: { className?: string }) => (
  <span className={className || "text-4"}>{"<"}</span>
);
const RightChevronIcon = ({ className }: { className?: string }) => (
  <span className={className || "text-4"}>{">"}</span>
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary",
  },
};

export const Quaternary: Story = {
  args: {
    variant: "quaternary",
    children: "Quaternary",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small",
  },
};

export const NormalLarge: Story = {
  args: {
    size: "normal",
    children: "Normal & Large",
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "Button",
    leftIcon: <LeftChevronIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Button",
    rightIcon: <RightChevronIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Button",
    leftIcon: <LeftChevronIcon />,
    rightIcon: <RightChevronIcon />,
  },
};
