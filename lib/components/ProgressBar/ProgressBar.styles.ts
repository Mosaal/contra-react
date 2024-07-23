import { cva } from "class-variance-authority";

export const progressBarCva = cva(
  "cr-progress cr-h-3 cr-w-full cr-appearance-none cr-overflow-hidden cr-rounded-2.5 cr-border-0.5 cr-bg-transparent",
  {
    variants: {
      raised: {
        true: "cr-shadow-small",
        false: "cr-shadow-none",
      },
      disabled: {
        true: "cr-progress-disabled cr-border-black-300",
        false: "cr-border-black",
      },
    },
    compoundVariants: [
      {
        raised: true,
        disabled: true,
        className: "cr-shadow-black-300",
      },
    ],
    defaultVariants: {
      raised: false,
      disabled: false,
    },
  },
);
