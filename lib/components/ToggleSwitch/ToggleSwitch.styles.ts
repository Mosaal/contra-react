import { cva } from "class-variance-authority";

export const toggleSwitchCva = cva(
  "contra-outline-0.5 contra-h-9 contra-w-15 contra-cursor-pointer contra-appearance-none contra-rounded-13 contra-border-0.5 contra-border-black contra-bg-blue-100 contra-outline-offset-1 contra-outline-pink contra-transition checked:contra-bg-yellow focus:contra-outline disabled:contra-cursor-not-allowed disabled:contra-border-black-300 disabled:contra-bg-black-200 disabled:contra-shadow-black-300 checked:disabled:contra-bg-yellow-100",
  {
    variants: {
      raised: {
        true: "contra-shadow-small",
        false: "contra-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);

export const toggleSwitchWrapperCva = cva(
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

export const toggleSwitchLabelCva = cva(
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

export const toggleSwitchToggleCva = cva(
  "contra-absolute contra-top-0 contra-flex contra-h-9 contra-w-9 contra-items-center contra-justify-center contra-rounded-full contra-border-0.5 contra-bg-white contra-transition-[left]",
  {
    variants: {
      checked: {
        true: "contra-left-6",
        false: "contra-left-0",
      },
      disabled: {
        true: "contra-border-black-300",
        false: "contra-border-black",
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

export const toggleSwitchToggleDotCva = cva(
  "contra-h-4 contra-w-4 contra-rounded-full contra-border-0.5 contra-transition",
  {
    variants: {
      checked: {
        true: "contra-bg-yellow",
        false: "contra-bg-black-200",
      },
      disabled: {
        true: "contra-border-black-300",
        false: "contra-border-black",
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        className: "contra-bg-yellow-100",
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);
