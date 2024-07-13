import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./Alert";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Alert> = {
  title: "Alert",
  component: Alert,
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
export const Info: Story = {
  args: {
    variant: "info",
    title: "You've got mail!",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Fill in all required fields.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Task failed!",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Task succeeded!",
  },
};

export const WithMessage: Story = {
  args: {
    className: "w-full",
    variant: "info",
    title: "You've got mail!",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure labore necessitatibus illo dignissimos debitis quisquam accusamus vitae cumque minima ad, libero dolore, dolorum sapiente nulla molestias reiciendis nisi. Facere, vel.",
  },
};
