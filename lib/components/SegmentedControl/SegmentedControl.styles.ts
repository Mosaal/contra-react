import { cva } from "class-variance-authority";

export const segmentedControlCva = cva(
  "contra-inline-flex contra-flex-row contra-items-center contra-rounded-6.5 contra-border-0.5 contra-border-black contra-bg-white contra-text-5.25 contra-leading-7",
  {
    variants: {
      block: {
        true: "contra-w-full",
      },
      raised: {
        true: "contra-shadow-normal",
        false: "contra-shadow-none",
      },
      disabled: {
        true: "contra-cursor-not-allowed contra-border-black-300",
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
      block: false,
      raised: false,
      disabled: false,
    },
  },
);

export const segmentedControlOptionCva = cva(
  "contra-outline-0.5 contra-flex-1 contra-appearance-none contra-rounded-6.5 contra-px-6 contra-py-2.5 contra-font-bold contra-text-black contra-outline-offset-1 contra-outline-pink contra-transition focus:contra-outline disabled:contra-cursor-not-allowed disabled:contra-text-black-300",
  {
    variants: {
      selected: {
        true: "contra-bg-green contra-text-white disabled:contra-bg-green-800 disabled:contra-text-white",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);
