import { cva } from "class-variance-authority";

export const indicatorCva = cva(
  "contra-h-4 contra-min-w-4 contra-rounded-7.5 contra-bg-red contra-px-1 contra-text-3 contra-font-bold contra-leading-4 contra-text-white",
  {
    variants: {
      raised: {
        true: "contra-shadow-small",
        false: "contra-shadow-none",
      },
      position: {
        "top-left": "-contra-translate-x-1/2 -contra-translate-y-1/2",
        "top-right": "-contra-translate-y-1/2 contra-translate-x-1/2",
        "bottom-left": "-contra-translate-x-1/2 contra-translate-y-1/2",
        "bottom-right": "contra-translate-x-1/2 contra-translate-y-1/2",
      },
    },
    defaultVariants: {
      raised: false,
      position: "top-right",
    },
  },
);

export const indicatorWrapperCva = cva("contra-absolute", {
  variants: {
    position: {
      "top-left": "contra-left-0 contra-top-0",
      "top-right": "contra-right-0 contra-top-0",
      "bottom-left": "contra-bottom-0 contra-left-0",
      "bottom-right": "contra-bottom-0 contra-right-0",
    },
  },
  defaultVariants: {
    position: "top-right",
  },
});
