import "../src/index.css";

import type { Preview } from "@storybook/react";

import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: "light",
      themes: {
        light: "light",
        dark: "dark",
      },
    }),
    withThemeByDataAttribute({
      defaultTheme: "light",
      attributeName: "data-mode",
      themes: {
        light: "light",
        dark: "dark",
      },
    }),
  ],
};

export default preview;
