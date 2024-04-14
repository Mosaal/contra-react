import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import PasswordInput from "./PasswordInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof PasswordInput> = {
  title: "PasswordInput",
  component: PasswordInput,
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Empty: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "initial-password",
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
    defaultValue: "initial-password",
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Placeholder",
    leftIcon: <LeftChevronIcon />,
  },
};

export const WithClickableIcon: Story = {
  args: {
    placeholder: "Placeholder",
    leftIcon: <LeftChevronIcon />,
    onLeftIconClick: fn(),
  },
};
