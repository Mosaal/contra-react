import { cva } from "class-variance-authority";

export const sliderCva = cva(
  "h-3 w-full appearance-none rounded-2.5 border-0.5 border-contra-black bg-gradient-to-r from-contra-red-800 to-contra-white disabled:cursor-not-allowed disabled:border-contra-black-300 disabled:from-contra-red-100 disabled:shadow-contra-black-300",
  {
    variants: {
      raised: {
        true: "shadow-contra-button-small",
        false: "shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);
