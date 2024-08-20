import { cva } from "class-variance-authority";

export const checkboxCva = cva(
  [
    "cr-border-black-000 checked:cr-bg-yellow-000 cr-rounded-3xs cr-relative cr-inline-flex cr-h-8 cr-w-8 cr-cursor-pointer cr-appearance-none cr-border-0.5 cr-bg-blue-100 disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-bg-black-200 disabled:cr-shadow-black-300",
    "focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000 cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all",
    "before:cr-absolute before:cr-left-1/2 before:cr-top-1/2 before:cr-h-5 before:cr-w-5 before:-cr-translate-x-1/2 before:-cr-translate-y-1/2",
  ],
  {
    variants: {
      variant: {
        primary:
          "checked:before:cr-content-check-black checked:disabled:cr-bg-yellow-100 checked:disabled:before:cr-content-check-black-300",
        secondary:
          "checked:cr-border-yellow-000 checked:before:cr-content-check-white checked:disabled:cr-border-yellow-100 checked:disabled:cr-bg-yellow-100",
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
  "cr-text-lg cr-font-extrabold cr-leading-6",
  {
    variants: {
      disabled: {
        true: "cr-text-black-300",
        false: "cr-text-black-000",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);
