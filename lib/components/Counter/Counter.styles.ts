import { cva } from "class-variance-authority";

export const counterContainerCva = cva(
  "flex flex-row items-center text-contra-black",
  {
    variants: {
      variant: {
        normal: "gap-x-3",
        contained: "overflow-hidden rounded-4 border-0.5 border-contra-black",
      },
      size: {
        small: "",
        normal: "",
      },
    },
    defaultVariants: {
      variant: "normal",
      size: "normal",
    },
  },
);
