import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { Button } from "../Button";

import { Check } from "@/icons";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
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
    className: "cr-w-90 cr-bg-red-000",
    children: (
      <div className="cr-text-white">
        <p className="cr-text-3xl cr-mb-2 cr-mt-4.25 cr-text-center cr-font-medium cr-uppercase cr-leading-7">
          Popular
        </p>
        <p className="cr-mb-8 cr-text-center cr-text-[2.75rem] cr-font-extrabold cr-uppercase cr-leading-[3.375rem]">
          Free
        </p>
        <ul className="cr-text-3xl cr-mb-8 cr-space-y-6 cr-font-medium cr-leading-7">
          <li className="cr-flex cr-flex-row cr-items-center cr-gap-4">
            <Check />
            <span>Get 24x7 Support</span>
          </li>
          <li className="cr-flex cr-flex-row cr-items-center cr-gap-4">
            <Check />
            <span>120+ Screens</span>
          </li>
          <li className="cr-flex cr-flex-row cr-items-center cr-gap-4">
            <Check />
            <span>60+ Components</span>
          </li>
        </ul>
        <Button block variant="secondary" className="cr-mb-4.25">
          Buy
        </Button>
      </div>
    ),
  },
};
