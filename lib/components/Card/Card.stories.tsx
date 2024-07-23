import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { Button } from "../Button";

import { Check } from "@/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
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
    children: "Most basic card",
  },
};

export const Raised: Story = {
  args: {
    raised: true,
    children: "Basic raised card",
  },
};

export const CustomExample: Story = {
  args: {
    className: "contra-w-90 contra-bg-red",
    children: (
      <div className="contra-text-white">
        <p className="contra-mb-2 contra-mt-4.25 contra-text-center contra-text-6 contra-font-medium contra-uppercase contra-leading-7">
          Popular
        </p>
        <p className="contra-mb-8 contra-text-center contra-text-11 contra-font-extrabold contra-uppercase contra-leading-13.5">
          Free
        </p>
        <ul className="contra-mb-8 contra-space-y-6 contra-text-6 contra-font-medium contra-leading-7">
          <li className="contra-flex contra-flex-row contra-items-center contra-gap-4">
            <Check />
            <span>Get 24x7 Support</span>
          </li>
          <li className="contra-flex contra-flex-row contra-items-center contra-gap-4">
            <Check />
            <span>120+ Screens</span>
          </li>
          <li className="contra-flex contra-flex-row contra-items-center contra-gap-4">
            <Check />
            <span>60+ Components</span>
          </li>
        </ul>
        <Button block variant="secondary" className="contra-mb-4.25">
          Buy
        </Button>
      </div>
    ),
  },
};
