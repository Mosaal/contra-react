import { cva } from "class-variance-authority";

export const creditCardCva = cva(
  "min-h-65 min-w-106.25 rounded-6 border-0.5 border-contra-black bg-contra-pink px-8.5 pb-6 pt-7 text-contra-white",
  {
    variants: {
      raised: {
        true: "shadow-contra-button-normal",
        false: "shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);
