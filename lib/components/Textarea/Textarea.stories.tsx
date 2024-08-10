import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./Textarea";
import { ChevronDown } from "@/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Textarea> = {
  title: "Textarea",
  component: Textarea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

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

export const Raised: Story = {
  args: {
    raised: true,
    placeholder: "Raised",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};

export const RaisedDisabled: Story = {
  args: {
    raised: true,
    disabled: true,
    placeholder: "Raised & Disabled",
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
    leftIcon: <ChevronDown className="cr-rotate-90 cr-stroke-3" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "Placeholder",
    rightIcon: <ChevronDown className="-cr-rotate-90 cr-stroke-3" />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "Placeholder",
    leftIcon: <ChevronDown className="cr-rotate-90 cr-stroke-3" />,
    rightIcon: <ChevronDown className="-cr-rotate-90 cr-stroke-3" />,
  },
};

export const WithClickableIcon: Story = {
  args: {
    placeholder: "Placeholder",
    leftIcon: <ChevronDown className="cr-rotate-90 cr-stroke-3" />,
    onLeftIconClick: fn(),
  },
};
