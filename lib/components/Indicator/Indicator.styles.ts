import { cva } from "class-variance-authority";

export const indicatorCva = cva(
  "cr-h-4 cr-min-w-4 cr-rounded-7.5 cr-bg-red cr-px-1 cr-text-3 cr-font-bold cr-leading-4 cr-text-white",
  {
    variants: {
      raised: {
        true: "cr-shadow-small",
        false: "cr-shadow-none",
      },
      position: {
        "top-left": "-cr-translate-x-1/2 -cr-translate-y-1/2",
        "top-right": "-cr-translate-y-1/2 cr-translate-x-1/2",
        "bottom-left": "-cr-translate-x-1/2 cr-translate-y-1/2",
        "bottom-right": "cr-translate-x-1/2 cr-translate-y-1/2",
      },
    },
    defaultVariants: {
      raised: false,
      position: "top-right",
    },
  },
);

export const indicatorWrapperCva = cva("cr-absolute", {
  variants: {
    position: {
      "top-left": "cr-left-0 cr-top-0",
      "top-right": "cr-right-0 cr-top-0",
      "bottom-left": "cr-bottom-0 cr-left-0",
      "bottom-right": "cr-bottom-0 cr-right-0",
    },
  },
  defaultVariants: {
    position: "top-right",
  },
});
