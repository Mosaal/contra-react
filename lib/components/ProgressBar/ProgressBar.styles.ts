import { cva } from "class-variance-authority";

export const progressBarCva = cva(
  "progress h-3 w-full appearance-none overflow-hidden rounded-2.5 border-0.5 bg-transparent",
  {
    variants: {
      raised: {
        true: "shadow-contra-small",
        false: "shadow-none",
      },
      disabled: {
        true: "progress-disabled border-contra-black-300",
        false: "border-contra-black",
      },
    },
    compoundVariants: [
      {
        raised: true,
        disabled: true,
        className: "shadow-contra-black-300",
      },
    ],
    defaultVariants: {
      raised: false,
      disabled: false,
    },
  },
);
