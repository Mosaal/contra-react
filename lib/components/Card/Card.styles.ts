import { cva } from "class-variance-authority";

export const cardCva = cva(
  "contra-overflow-hidden contra-rounded-4 contra-border-0.5 contra-border-black contra-p-5.5",
  {
    variants: {
      raised: {
        true: "contra-shadow-normal",
        false: "contra-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);
