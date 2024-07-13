import { cva } from "class-variance-authority";

export const cardCva = cva(
  "overflow-hidden rounded-4 border-0.5 border-contra-black p-5.5",
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
