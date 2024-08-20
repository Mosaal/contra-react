import { cva } from "class-variance-authority";

export const cardCva = cva(
  "cr-border-black-000 cr-rounded-md cr-overflow-hidden cr-border-0.5 cr-bg-white cr-p-5.5",
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
