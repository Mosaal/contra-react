import { cva } from "class-variance-authority";

export const toggleSwitchCva = cva(
  "h-9 w-15 cursor-pointer appearance-none rounded-13 border-0.5 border-contra-black bg-contra-blue-100 transition checked:bg-contra-yellow disabled:cursor-not-allowed disabled:border-contra-black-300 disabled:bg-contra-black-200 disabled:shadow-contra-black-300 checked:disabled:bg-contra-yellow-100",
  {
    variants: {
      raised: {
        true: "shadow-contra-button-small",
        false: "shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);

export const toggleSwitchWrapperCva = cva(
  "inline-flex flex-row items-center gap-x-4",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const toggleSwitchLabelCva = cva("text-4.25 font-extrabold leading-6", {
  variants: {
    disabled: {
      true: "text-contra-black-300",
      false: "text-contra-black",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const toggleSwitchToggleCva = cva(
  "absolute top-0 flex h-9 w-9 items-center justify-center rounded-full border-0.5 bg-contra-white transition-[left]",
  {
    variants: {
      checked: {
        true: "left-6",
        false: "left-0",
      },
      disabled: {
        true: "border-contra-black-300",
        false: "border-contra-black",
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);

export const toggleSwitchToggleDotCva = cva(
  "h-4 w-4 rounded-full border-0.5 transition",
  {
    variants: {
      checked: {
        true: "bg-contra-yellow",
        false: "bg-contra-black-200",
      },
      disabled: {
        true: "border-contra-black-300",
        false: "border-contra-black",
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        className: "bg-contra-yellow-100",
      },
    ],
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  },
);
