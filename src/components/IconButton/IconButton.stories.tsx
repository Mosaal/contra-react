import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "./IconButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
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

const PlusIcon = ({ className }: { className?: string }) => (
  <span className={className || "text-8"}>+</span>
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: <PlusIcon />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: <PlusIcon />,
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: <PlusIcon />,
  },
};

export const Quaternary: Story = {
  args: {
    variant: "quaternary",
    children: <PlusIcon />,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: <PlusIcon className="text-6" />,
  },
};

export const Normal: Story = {
  args: {
    size: "normal",
    children: <PlusIcon />,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: <PlusIcon className="text-10" />,
  },
};

export const Disabled: Story = {
  args: {
    children: <PlusIcon />,
    disabled: true,
  },
};
