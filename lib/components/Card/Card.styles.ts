import { cva } from "class-variance-authority";

export const cardCva = cva(
  "cr-overflow-hidden cr-rounded-4 cr-border-0.5 cr-border-black cr-p-5.5",
  {
    variants: {
      raised: {
        true: "cr-shadow-normal",
        false: "cr-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);
