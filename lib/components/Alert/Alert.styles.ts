import { cva } from "class-variance-authority";

export const alertCva = cva(
  "cr-border-black-000 cr-bg-black-000 cr-rounded-md cr-inline-flex cr-w-90 cr-max-w-full cr-flex-row cr-gap-4 cr-border-0.5 cr-px-5.5 cr-py-4.25",
);

export const alertIconCva = cva(
  "cr-flex cr-h-10 cr-w-10 cr-shrink-0 cr-items-center cr-justify-center cr-rounded-full",
  {
    variants: {
      variant: {
        info: "cr-bg-blue-000",
        warning: "cr-bg-yellow-000",
        error: "cr-bg-red-000",
        success: "cr-bg-green-000",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);
