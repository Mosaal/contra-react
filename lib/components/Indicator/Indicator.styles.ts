import { cva } from "class-variance-authority";

export const indicatorCva = cva(
  "h-4 min-w-4 rounded-7.5 bg-contra-red px-1 text-3 font-bold leading-4 text-contra-white",
  {
    variants: {
      raised: {
        true: "shadow-contra-button-small",
        false: "shadow-none",
      },
      position: {
        "top-left": "-translate-x-1/2 -translate-y-1/2",
        "top-right": "-translate-y-1/2 translate-x-1/2",
        "bottom-left": "-translate-x-1/2 translate-y-1/2",
        "bottom-right": "translate-x-1/2 translate-y-1/2",
      },
    },
    defaultVariants: {
      raised: false,
      position: "top-right",
    },
  },
);

export const indicatorWrapperCva = cva("absolute", {
  variants: {
    position: {
      "top-left": "left-0 top-0",
      "top-right": "right-0 top-0",
      "bottom-left": "bottom-0 left-0",
      "bottom-right": "bottom-0 right-0",
    },
  },
  defaultVariants: {
    position: "top-right",
  },
});
