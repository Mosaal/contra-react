import { cva } from "class-variance-authority";

export const toggleSwitchCva = cva(
  "cr-outline-0.5 cr-h-9 cr-w-15 cr-cursor-pointer cr-appearance-none cr-rounded-13 cr-border-0.5 cr-border-black cr-bg-blue-100 cr-outline-offset-1 cr-outline-pink cr-transition checked:cr-bg-yellow focus:cr-outline disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-bg-black-200 disabled:cr-shadow-black-300 checked:disabled:cr-bg-yellow-100",
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

export const toggleSwitchToggleCva = cva(
  "cr-absolute cr-top-0 cr-flex cr-h-9 cr-w-9 cr-items-center cr-justify-center cr-rounded-full cr-border-0.5 cr-bg-white cr-transition-[left]",
  {
    variants: {
      checked: {
        true: "cr-left-6",
        false: "cr-left-0",
      },
      disabled: {
        true: "cr-border-black-300",
        false: "cr-border-black",
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

export const toggleSwitchToggleDotCva = cva(
  "cr-h-4 cr-w-4 cr-rounded-full cr-border-0.5 cr-transition",
  {
    variants: {
      checked: {
        true: "cr-bg-yellow",
        false: "cr-bg-black-200",
      },
      disabled: {
        true: "cr-border-black-300",
        false: "cr-border-black",
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        className: "cr-bg-yellow-100",
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);
