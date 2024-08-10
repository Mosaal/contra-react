import { cva } from "class-variance-authority";

export const checkboxCva = cva(
  [
    "cr-relative cr-inline-flex cr-h-8 cr-w-8 cr-cursor-pointer cr-appearance-none cr-rounded-2 cr-border-0.5 cr-border-black cr-bg-blue-100 checked:cr-bg-yellow disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-bg-black-200 disabled:cr-shadow-black-300",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink focus-visible:cr-outline-pink",
    "before:cr-absolute before:cr-left-1/2 before:cr-top-1/2 before:cr-h-5 before:cr-w-5 before:-cr-translate-x-1/2 before:-cr-translate-y-1/2",
  ],
  {
    variants: {
      variant: {
        primary:
          "checked:before:cr-content-check-black checked:disabled:before:cr-content-check-black-300 checked:disabled:cr-bg-yellow-100",
        secondary:
          "checked:before:cr-content-check-white checked:cr-border-yellow checked:disabled:cr-border-yellow-100 checked:disabled:cr-bg-yellow-100",
      },
      raised: {
        true: "cr-shadow-small",
        false: "cr-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
      variant: "primary",
    },
  },
);

export const checkboxWrapperCva = cva(
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

export const checkboxLabelCva = cva(
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
