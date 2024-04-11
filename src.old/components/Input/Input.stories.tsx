import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
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

const LeftChevronIcon = ({ className }: { className?: string }) => (
  <span className={className || "text-6"}>{"<"}</span>
);
const RightChevronIcon = ({ className }: { className?: string }) => (
  <span className={className || "text-6"}>{">"}</span>
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Empty: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "Initial value",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};

export const DisabledWithValue: Story = {
  args: {
    disabled: true,
    defaultValue: "Initial value",
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Placeholder",
    leftIcon: <LeftChevronIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "Placeholder",
    rightIcon: <RightChevronIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "Placeholder",
    leftIcon: <LeftChevronIcon />,
    rightIcon: <RightChevronIcon />,
  },
};

export const WithClickableIcon: Story = {
  args: {
    placeholder: "Placeholder",
    leftIcon: <LeftChevronIcon />,
    onLeftIconClick: fn(),
  },
};
