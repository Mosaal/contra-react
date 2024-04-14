import { cva } from "class-variance-authority";

export const radioButtonCva = cva(
  "h-8 w-8 cursor-pointer appearance-none rounded-full border-0.5 border-contra-black bg-contra-blue-100 transition checked:bg-contra-white disabled:cursor-not-allowed disabled:border-contra-black-300 disabled:bg-contra-black-200 disabled:shadow-contra-black-300",
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

export const radioButtonWrapperCva = cva(
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

export const radioButtonLabelCva = cva("text-4.25 font-extrabold leading-6", {
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

export const radioButtonDotCva = cva(
  "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-0.5 transition",
  {
    variants: {
      disabled: {
        true: "border-contra-black-300 bg-contra-yellow-100",
        false: "border-contra-black bg-contra-yellow",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);
