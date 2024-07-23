import { cva } from "class-variance-authority";

export const checkboxCva = cva(
  "cr-outline-0.5 cr-h-8 cr-w-8 cr-cursor-pointer cr-appearance-none cr-rounded-2 cr-border-0.5 cr-border-black cr-bg-blue-100 cr-outline-offset-1 cr-outline-pink cr-transition checked:cr-bg-yellow focus:cr-outline disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-bg-black-200 disabled:cr-shadow-black-300",
  {
    variants: {
      variant: {
        primary: "checked:disabled:cr-bg-yellow-100",
        secondary:
          "checked:cr-border-yellow checked:disabled:cr-border-yellow-100 checked:disabled:cr-bg-yellow-100",
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

export const checkboxIconCva = cva(
  "cr-pointer-events-none cr-absolute cr-left-1/2 cr-top-1/2 cr-h-5 cr-w-5 -cr-translate-x-1/2 -cr-translate-y-1/2 cr-stroke-3 cr-transition",
  {
    variants: {
      variant: {
        primary: "cr-text-black",
        secondary: "cr-text-white",
      },
      disabled: {
        true: "cr-text-black-300",
      },
    },
    compoundVariants: [
      {
        disabled: true,
        variant: "secondary",
        className: "cr-text-white",
      },
    ],
    defaultVariants: {
      disabled: false,
      variant: "primary",
    },
  },
);
