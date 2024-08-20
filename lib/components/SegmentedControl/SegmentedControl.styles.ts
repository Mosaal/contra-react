import { cva } from "class-variance-authority";

export const segmentedControlCva = cva(
  "cr-border-black-000 cr-text-xl cr-rounded-xl cr-inline-flex cr-flex-row cr-items-center cr-border-0.5 cr-bg-white cr-leading-7",
  {
    variants: {
      block: {
        true: "cr-w-full",
      },
      raised: {
        true: "cr-shadow-normal",
        false: "cr-shadow-none",
      },
      disabled: {
        true: "cr-cursor-not-allowed cr-border-black-300",
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
      block: false,
      raised: false,
      disabled: false,
    },
  },
);

export const segmentedControlOptionCva = cva(
  [
    "cr-text-black-000 cr-rounded-xl cr-flex-1 cr-appearance-none cr-px-6 cr-py-2.5 cr-font-bold disabled:cr-cursor-not-allowed disabled:cr-text-black-300",
    "focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000 cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all",
  ],
  {
    variants: {
      selected: {
        true: "cr-bg-green-000 cr-text-white disabled:cr-bg-green-800 disabled:cr-text-white",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);
