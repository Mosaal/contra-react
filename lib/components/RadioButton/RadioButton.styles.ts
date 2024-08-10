import { cva } from "class-variance-authority";

export const radioButtonCva = cva(
  [
    "cr-relative cr-inline-flex cr-h-8 cr-w-8 cr-cursor-pointer cr-appearance-none cr-rounded-full cr-border-0.5 cr-border-black cr-bg-blue-100 disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-bg-black-200 disabled:cr-shadow-black-300",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink focus-visible:cr-outline-pink",
  ],
  {
    variants: {
      variant: {
        primary: [
          "checked:cr-bg-white checked:disabled:cr-bg-white",
          "before:cr-absolute before:cr-left-1/2 before:cr-top-1/2 before:cr-h-4 before:cr-w-4 before:-cr-translate-x-1/2 before:-cr-translate-y-1/2 before:cr-rounded-full before:cr-border-0.5 before:cr-border-transparent before:cr-bg-transparent checked:before:cr-border-black checked:before:cr-bg-yellow disabled:before:cr-border-transparent disabled:before:cr-bg-transparent checked:disabled:before:cr-border-black-300 checked:disabled:before:cr-bg-yellow-100",
        ],
        secondary: [
          "checked:cr-border-yellow checked:cr-bg-yellow checked:disabled:cr-border-yellow-100 checked:disabled:cr-bg-yellow-100",
          "checked:before:cr-content-check-white before:cr-absolute before:cr-left-1/2 before:cr-top-1/2 before:cr-h-5 before:cr-w-5 before:-cr-translate-x-1/2 before:-cr-translate-y-1/2",
        ],
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

export const radioButtonWrapperCva = cva(
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

export const radioButtonLabelCva = cva(
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
