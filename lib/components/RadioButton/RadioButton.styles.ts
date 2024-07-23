import { cva } from "class-variance-authority";

export const radioButtonCva = cva(
  "cr-outline-0.5 cr-h-8 cr-w-8 cr-cursor-pointer cr-appearance-none cr-rounded-full cr-border-0.5 cr-border-black cr-bg-blue-100 cr-outline-offset-1 cr-outline-pink cr-transition focus:cr-outline disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-bg-black-200 disabled:cr-shadow-black-300",
  {
    variants: {
      variant: {
        primary: "checked:cr-bg-white",
        secondary:
          "checked:cr-border-yellow checked:cr-bg-yellow checked:disabled:cr-border-yellow-100 checked:disabled:cr-bg-yellow-100",
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

export const radioButtonDotCva = cva(
  "cr-absolute cr-left-1/2 cr-top-1/2 cr-h-4 cr-w-4 -cr-translate-x-1/2 -cr-translate-y-1/2 cr-rounded-full cr-border-0.5 cr-transition",
  {
    variants: {
      disabled: {
        true: "cr-border-black-300 cr-bg-yellow-100",
        false: "cr-border-black cr-bg-yellow",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const radioButtonIconCva = cva(
  "cr-pointer-events-none cr-absolute cr-left-1/2 cr-top-1/2 cr-h-5 cr-w-5 -cr-translate-x-1/2 -cr-translate-y-1/2 cr-stroke-3 cr-text-white cr-transition",
);
