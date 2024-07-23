import { cva } from "class-variance-authority";

export const segmentedControlCva = cva(
  "cr-inline-flex cr-flex-row cr-items-center cr-rounded-6.5 cr-border-0.5 cr-border-black cr-bg-white cr-text-5.25 cr-leading-7",
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
  "cr-outline-0.5 cr-flex-1 cr-appearance-none cr-rounded-6.5 cr-px-6 cr-py-2.5 cr-font-bold cr-text-black cr-outline-offset-1 cr-outline-pink cr-transition focus:cr-outline disabled:cr-cursor-not-allowed disabled:cr-text-black-300",
  {
    variants: {
      selected: {
        true: "cr-bg-green cr-text-white disabled:cr-bg-green-800 disabled:cr-text-white",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);
