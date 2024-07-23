import { cva } from "class-variance-authority";

export const alertCva = cva(
  "cr-inline-flex cr-w-90 cr-flex-row cr-gap-4 cr-rounded-4 cr-border-0.5 cr-border-black cr-bg-black cr-px-5.5 cr-py-4.25",
);

export const alertIconCva = cva(
  "cr-flex cr-h-10 cr-w-10 cr-shrink-0 cr-items-center cr-justify-center cr-rounded-full",
  {
    variants: {
      variant: {
        info: "cr-bg-blue",
        warning: "cr-bg-yellow",
        error: "cr-bg-red",
        success: "cr-bg-green",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);
