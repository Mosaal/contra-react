import { cva } from "class-variance-authority";

import { BUTTON_COLORS } from "../Button";

export const iconButtonCva = cva(
  "contra-outline-0.5 contra-appearance-none contra-rounded-full contra-border-0.5 contra-shadow-black contra-outline-offset-1 contra-outline-pink contra-transition focus:contra-outline disabled:contra-cursor-not-allowed disabled:contra-shadow-black-300",
  {
    variants: {
      variant: BUTTON_COLORS,
      size: {
        small: "contra-h-8 contra-w-8",
        normal: "contra-h-12 contra-w-12",
        large: "contra-h-15 contra-w-15",
      },
      raised: {
        false: "contra-shadow-none",
      },
    },
    compoundVariants: [
      {
        raised: true,
        size: ["small", "normal"],
        className: "contra-shadow-small",
      },
      {
        raised: true,
        size: "large",
        className: "contra-shadow-normal",
      },
    ],
    defaultVariants: {
      size: "normal",
      variant: "primary",
      raised: false,
    },
  },
);
