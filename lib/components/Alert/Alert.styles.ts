import { cva } from "class-variance-authority";

export const alertCva = cva(
  "inline-flex w-90 flex-row gap-4 rounded-4 border-0.5 border-contra-black bg-contra-black px-5.5 py-4.25",
);

export const alertIconCva = cva(
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        info: "bg-contra-blue",
        warning: "bg-contra-yellow",
        error: "bg-contra-red",
        success: "bg-contra-green",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);
