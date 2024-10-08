import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";

import { Plus } from "@/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: <Plus />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: <Plus />,
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: <Plus />,
  },
};

export const Quaternary: Story = {
  args: {
    variant: "quaternary",
    children: <Plus />,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: <Plus className="cr-h-4 cr-w-4" />,
  },
};

export const Normal: Story = {
  args: {
    size: "normal",
    children: <Plus />,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: <Plus className="cr-h-10 cr-w-10" />,
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    children: <Plus />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Plus />,
  },
};

export const RaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    children: <Plus />,
  },
};

export const CustomElement: Story = {
  args: {
    as: "a",
    variant: "primary",
    children: <Plus />,
    href: "javascript:void(0)",
  },
};
