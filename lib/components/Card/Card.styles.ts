import { cva } from "class-variance-authority";

export const cardCva = cva(
  "cr-overflow-hidden cr-rounded-md cr-border-0.5 cr-border-black-000 cr-bg-white cr-p-5.5",
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
