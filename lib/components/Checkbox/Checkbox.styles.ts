import { cva } from "class-variance-authority";

export const checkboxCva = cva(
  "h-8 w-8 cursor-pointer appearance-none rounded-2 border-0.5 border-contra-black bg-contra-blue-100 outline-2 outline-offset-4 outline-contra-pink transition checked:bg-contra-yellow focus:outline disabled:cursor-not-allowed disabled:border-contra-black-300 disabled:bg-contra-black-200 disabled:shadow-contra-black-300",
  {
    variants: {
      variant: {
        primary: "checked:disabled:bg-contra-yellow-100",
        secondary:
          "checked:border-contra-yellow checked:disabled:border-contra-yellow-100 checked:disabled:bg-contra-yellow-100",
      },
      raised: {
        true: "shadow-contra-small",
        false: "shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
      variant: "primary",
    },
  },
);

export const checkboxWrapperCva = cva(
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

export const checkboxLabelCva = cva("text-4.25 font-extrabold leading-6", {
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

export const checkboxIconCva = cva(
  "pointer-events-none absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 stroke-3 transition",
  {
    variants: {
      variant: {
        primary: "text-contra-black",
        secondary: "text-contra-white",
      },
      disabled: {
        true: "text-contra-black-300",
      },
    },
    compoundVariants: [
      {
        disabled: true,
        variant: "secondary",
        className: "text-contra-white",
      },
    ],
    defaultVariants: {
      disabled: false,
      variant: "primary",
    },
  },
);
