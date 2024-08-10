import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { SelectOption } from "./Select.types";

import { ChevronDown } from "@/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
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

const options: SelectOption[] = [
  { value: "option#1", label: "Option #1" },
  { value: "option#2", label: "Option #2" },
  { value: "option#3", label: "Option #3" },
  { value: "option#4", label: "Option #4" },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OptionsAsChildren: Story = {
  args: {
    placeholder: "Click to select...",
    children: options.map((option, index) => (
      <option key={`option#${index}`} value={option.value}>
        {option.label}
      </option>
    )),
  },
};

export const OptionsAsProps: Story = {
  args: {
    options,
    placeholder: "Click to select...",
  },
};

export const WithValue: Story = {
  args: {
    options,
    value: "option#2",
  },
};

export const WithDefaultValue: Story = {
  args: {
    options,
    defaultValue: "option#2",
  },
};

export const Raised: Story = {
  args: {
    options,
    raised: true,
    placeholder: "Raised",
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    placeholder: "Disabled",
  },
};

export const SingleOptionDisabled: Story = {
  args: {
    placeholder: "Click to select...",
    options: [
      ...options.slice(0, 3),
      { value: "option#4", label: "Option #4", disabled: true },
    ],
  },
};

export const RaisedDisabled: Story = {
  args: {
    options,
    raised: true,
    disabled: true,
    placeholder: "Raised & Disabled",
  },
};

export const DisabledWithValue: Story = {
  args: {
    options,
    disabled: true,
    defaultValue: "option#2",
  },
};

export const WithLeftIcon: Story = {
  args: {
    options,
    placeholder: "Placeholder",
    leftIcon: <ChevronDown className="cr-rotate-90 cr-stroke-3" />,
  },
};

export const WithClickableIcon: Story = {
  args: {
    options,
    placeholder: "Placeholder",
    leftIcon: <ChevronDown className="cr-rotate-90 cr-stroke-3" />,
    onLeftIconClick: fn(),
  },
};
