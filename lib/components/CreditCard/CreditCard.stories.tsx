import type { Meta, StoryObj } from "@storybook/react";

import { CreditCard } from "./CreditCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CreditCard> = {
  title: "Components/CreditCard",
  component: CreditCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    cardNumber: "8765 7875 6759 4344",
    cardHolder: "diya mehra.",
    cardType: <div className="cr-bg-black-000 cr-h-8 cr-w-24 cr-opacity-50" />,
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    cardNumber: "8765 7875 6759 4344",
    cardHolder: "diya mehra.",
    cardType: <div className="cr-bg-black-000 cr-h-8 cr-w-24 cr-opacity-50" />,
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
