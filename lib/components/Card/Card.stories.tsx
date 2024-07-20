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
    className: "w-90 bg-contra-red",
    children: (
      <div className="text-contra-white">
        <p className="mb-2 mt-4.25 text-center text-6 font-medium uppercase leading-7">
          Popular
        </p>
        <p className="mb-8 text-center text-11 font-extrabold uppercase leading-13.5">
          Free
        </p>
        <ul className="mb-8 space-y-6 text-6 font-medium leading-7">
          <li className="flex flex-row items-center gap-4">
            <Check />
            <span>Get 24x7 Support</span>
          </li>
          <li className="flex flex-row items-center gap-4">
            <Check />
            <span>120+ Screens</span>
          </li>
          <li className="flex flex-row items-center gap-4">
            <Check />
            <span>60+ Components</span>
          </li>
        </ul>
        <Button block variant="secondary" className="mb-4.25">
          Buy
        </Button>
      </div>
    ),
  },
};
