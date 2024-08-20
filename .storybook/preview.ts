import type { Preview } from "@storybook/react";

import "../lib/index.css";

import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      toc: true,
    },
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: "light",
      themes: {
        dark: "dark",
        light: "light",
      },
    }),
    withThemeByDataAttribute({
      defaultTheme: "light",
      attributeName: "data-mode",
      themes: {
        dark: "dark",
        light: "light",
      },
    }),
  ],
};

export default preview;
