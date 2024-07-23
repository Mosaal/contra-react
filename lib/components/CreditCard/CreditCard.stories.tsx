import type { Meta, StoryObj } from "@storybook/react";

import { CreditCard } from "./CreditCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CreditCard> = {
  title: "CreditCard",
  component: CreditCard,
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
export const Basic: Story = {
  args: {
    cardNumber: "8765 7875 6759 4344",
    cardHolder: "diya mehra.",
    cardType: (
      <div className="contra-h-8 contra-w-24 contra-bg-black contra-opacity-50" />
    ),
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    cardNumber: "8765 7875 6759 4344",
    cardHolder: "diya mehra.",
    cardType: (
      <div className="contra-h-8 contra-w-24 contra-bg-black contra-opacity-50" />
    ),
  },
};

export const WithoutCardType: Story = {
  args: {
    raised: true,
    cardHolder: "diya mehra.",
  },
};

export const WithoutCardNumber: Story = {
  args: {
    raised: true,
    cardHolder: "diya mehra.",
  },
};

export const WithoutCardHolder: Story = {
  args: {
    raised: true,
  },
};
