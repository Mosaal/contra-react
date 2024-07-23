import { cva } from "class-variance-authority";

export const progressBarCva = cva(
  "contra-progress contra-h-3 contra-w-full contra-appearance-none contra-overflow-hidden contra-rounded-2.5 contra-border-0.5 contra-bg-transparent",
  {
    variants: {
      raised: {
        true: "contra-shadow-small",
        false: "contra-shadow-none",
      },
      disabled: {
        true: "contra-progress-disabled contra-border-black-300",
        false: "contra-border-black",
      },
    },
    compoundVariants: [
      {
        raised: true,
        disabled: true,
        className: "contra-shadow-black-300",
      },
    ],
    defaultVariants: {
      raised: false,
      disabled: false,
    },
  },
);
