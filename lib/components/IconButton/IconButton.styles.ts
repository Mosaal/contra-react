import { cva } from "class-variance-authority";

import { BUTTON_COLORS } from "../Button";

export const iconButtonCva = cva(
  [
    "cr-appearance-none cr-rounded-full cr-border-0.5 cr-shadow-black disabled:cr-cursor-not-allowed disabled:cr-shadow-black-300",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink focus-visible:cr-outline-pink",
  ],
  {
    variants: {
      variant: BUTTON_COLORS,
      size: {
        small: "cr-h-8 cr-w-8",
        normal: "cr-h-12 cr-w-12",
        large: "cr-h-15 cr-w-15",
      },
      raised: {
        false: "cr-shadow-none",
      },
    },
    compoundVariants: [
      {
        raised: true,
        size: ["small", "normal"],
        className: "cr-shadow-small",
      },
      {
        raised: true,
        size: "large",
        className: "cr-shadow-normal",
      },
    ],
    defaultVariants: {
      size: "normal",
      variant: "primary",
      raised: false,
    },
  },
);
