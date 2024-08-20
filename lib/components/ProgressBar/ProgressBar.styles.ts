import { cva } from "class-variance-authority";

export const progressBarCva = cva(
  "cr-h-3 cr-w-full cr-overflow-hidden cr-rounded-2xs cr-border-0.5",
  {
    variants: {
      raised: {
        true: "cr-shadow-small",
        false: "cr-shadow-none",
      },
      disabled: {
        true: "cr-border-black-300",
        false: "cr-border-black-000",
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

export const progressBarValueCva = cva(
  "cr-h-full cr-max-w-full cr-transition-all",
  {
    variants: {
      disabled: {
        true: "cr-bg-yellow-100",
        false: "cr-bg-yellow-000",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);
