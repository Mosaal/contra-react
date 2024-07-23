import { cva } from "class-variance-authority";

export const checkboxCva = cva(
  "contra-outline-0.5 contra-h-8 contra-w-8 contra-cursor-pointer contra-appearance-none contra-rounded-2 contra-border-0.5 contra-border-black contra-bg-blue-100 contra-outline-offset-1 contra-outline-pink contra-transition checked:contra-bg-yellow focus:contra-outline disabled:contra-cursor-not-allowed disabled:contra-border-black-300 disabled:contra-bg-black-200 disabled:contra-shadow-black-300",
  {
    variants: {
      variant: {
        primary: "checked:disabled:contra-bg-yellow-100",
        secondary:
          "checked:contra-border-yellow checked:disabled:contra-border-yellow-100 checked:disabled:contra-bg-yellow-100",
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

export const checkboxWrapperCva = cva(
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

export const checkboxLabelCva = cva(
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

export const checkboxIconCva = cva(
  "contra-pointer-events-none contra-absolute contra-left-1/2 contra-top-1/2 contra-h-5 contra-w-5 -contra-translate-x-1/2 -contra-translate-y-1/2 contra-stroke-3 contra-transition",
  {
    variants: {
      variant: {
        primary: "contra-text-black",
        secondary: "contra-text-white",
      },
      disabled: {
        true: "contra-text-black-300",
      },
    },
    compoundVariants: [
      {
        disabled: true,
        variant: "secondary",
        className: "contra-text-white",
      },
    ],
    defaultVariants: {
      disabled: false,
      variant: "primary",
    },
  },
);
