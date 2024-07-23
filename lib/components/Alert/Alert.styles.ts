import { cva } from "class-variance-authority";

export const alertCva = cva(
  "contra-inline-flex contra-w-90 contra-flex-row contra-gap-4 contra-rounded-4 contra-border-0.5 contra-border-black contra-bg-black contra-px-5.5 contra-py-4.25",
);

export const alertIconCva = cva(
  "contra-flex contra-h-10 contra-w-10 contra-shrink-0 contra-items-center contra-justify-center contra-rounded-full",
  {
    variants: {
      variant: {
        info: "contra-bg-blue",
        warning: "contra-bg-yellow",
        error: "contra-bg-red",
        success: "contra-bg-green",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);
