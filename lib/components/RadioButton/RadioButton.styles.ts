import { cva } from "class-variance-authority";

export const radioButtonCva = cva(
  "contra-outline-0.5 contra-h-8 contra-w-8 contra-cursor-pointer contra-appearance-none contra-rounded-full contra-border-0.5 contra-border-black contra-bg-blue-100 contra-outline-offset-1 contra-outline-pink contra-transition focus:contra-outline disabled:contra-cursor-not-allowed disabled:contra-border-black-300 disabled:contra-bg-black-200 disabled:contra-shadow-black-300",
  {
    variants: {
      variant: {
        primary: "checked:contra-bg-white",
        secondary:
          "checked:contra-border-yellow checked:contra-bg-yellow checked:disabled:contra-border-yellow-100 checked:disabled:contra-bg-yellow-100",
      },
      raised: {
        true: "contra-shadow-small",
        false: "contra-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
      variant: "primary",
    },
  },
);

export const radioButtonWrapperCva = cva(
  "contra-inline-flex contra-flex-row contra-items-center contra-gap-x-4",
  {
    variants: {
      disabled: {
        true: "contra-cursor-not-allowed",
        false: "contra-cursor-pointer",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const radioButtonLabelCva = cva(
  "contra-text-4.25 contra-font-extrabold contra-leading-6",
  {
    variants: {
      disabled: {
        true: "contra-text-black-300",
        false: "contra-text-black",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const radioButtonDotCva = cva(
  "contra-absolute contra-left-1/2 contra-top-1/2 contra-h-4 contra-w-4 -contra-translate-x-1/2 -contra-translate-y-1/2 contra-rounded-full contra-border-0.5 contra-transition",
  {
    variants: {
      disabled: {
        true: "contra-border-black-300 contra-bg-yellow-100",
        false: "contra-border-black contra-bg-yellow",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const radioButtonIconCva = cva(
  "contra-pointer-events-none contra-absolute contra-left-1/2 contra-top-1/2 contra-h-5 contra-w-5 -contra-translate-x-1/2 -contra-translate-y-1/2 contra-stroke-3 contra-text-white contra-transition",
);
