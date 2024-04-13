import { cva } from "class-variance-authority";

export const segmentedControlCva = cva(
  "relative inline-flex flex-row items-center overflow-hidden rounded-6.5 border-0.5 border-contra-black bg-contra-white text-5.25 leading-7",
  {
    variants: {
      block: {
        true: "w-full",
      },
      raised: {
        true: "shadow-contra-button-normal",
        false: "shadow-none",
      },
      disabled: {
        true: "cursor-not-allowed border-contra-black-300",
      },
    },
    defaultVariants: {
      block: false,
    },
  },
);

export const segmentedControlOptionCva = cva(
  "flex-1 appearance-none rounded-6.5 bg-transparent px-6 py-2.5 font-bold text-contra-black transition disabled:cursor-not-allowed disabled:text-contra-black-300",
  {
    variants: {
      selected: {
        true: "bg-contra-green font-extrabold text-contra-white disabled:bg-contra-green-800 disabled:text-contra-white",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);
