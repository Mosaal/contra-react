import { cva } from "class-variance-authority";

import { BUTTON_COLORS } from "../Button";

export const iconButtonCva = cva(
  "appearance-none rounded-full border-0.5 shadow-contra-black outline-2 outline-offset-4 outline-contra-pink transition focus:outline disabled:cursor-not-allowed disabled:shadow-contra-black-300",
  {
    variants: {
      variant: BUTTON_COLORS,
      size: {
        small: "h-8 w-8",
        normal: "h-12 w-12",
        large: "h-15 w-15",
      },
      raised: {
        false: "shadow-none",
      },
    },
    compoundVariants: [
      {
        raised: true,
        size: ["small", "normal"],
        className: "shadow-contra-small",
      },
      {
        raised: true,
        size: "large",
        className: "shadow-contra-normal",
      },
    ],
    defaultVariants: {
      size: "normal",
      variant: "primary",
      raised: false,
    },
  },
);
