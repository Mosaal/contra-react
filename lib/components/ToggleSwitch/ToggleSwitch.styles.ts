import { cva } from "class-variance-authority";

export const toggleSwitchCva = cva(
  [
    "cr-relative cr-inline-flex cr-h-9 cr-w-15 cr-cursor-pointer cr-appearance-none cr-rounded-13 cr-border-0.5 cr-border-black cr-bg-blue-100 checked:cr-bg-yellow disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-bg-black-200 disabled:cr-shadow-black-300 checked:disabled:cr-bg-yellow-100",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink focus-visible:cr-outline-pink",
    "before:cr-ring-0.5 before:cr-absolute before:cr-left-2 before:cr-top-1/2 before:cr-h-4 before:cr-w-4 before:-cr-translate-y-1/2 before:cr-rounded-full before:cr-border-0.5 before:cr-border-black before:cr-bg-transparent before:cr-ring-black before:cr-ring-offset-2 before:cr-ring-offset-white before:cr-transition-transform checked:before:cr-translate-x-6 disabled:before:cr-border-black-300 disabled:before:cr-ring-black-300",
  ],
  {
    variants: {
      raised: {
        true: "cr-shadow-small",
        false: "cr-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);

export const toggleSwitchWrapperCva = cva(
  "cr-inline-flex cr-flex-row cr-items-center cr-gap-x-4",
  {
    variants: {
      disabled: {
        true: "cr-cursor-not-allowed",
        false: "cr-cursor-pointer",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const toggleSwitchLabelCva = cva(
  "cr-text-4.25 cr-font-extrabold cr-leading-6",
  {
    variants: {
      disabled: {
        true: "cr-text-black-300",
        false: "cr-text-black",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);
