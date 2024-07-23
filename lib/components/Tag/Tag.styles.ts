import { cva } from "class-variance-authority";

export const tagCva = cva(
  "cr-rounded-11 cr-border-0.5 cr-border-black cr-px-2.5 cr-py-2 cr-text-3 cr-font-extrabold cr-leading-4",
  {
    variants: {
      active: {
        true: "cr-bg-pink-800",
        false: "cr-bg-white",
      },
      raised: {
        true: "cr-shadow-small",
        false: "cr-shadow-none",
      },
    },
    defaultVariants: {
      active: false,
      raised: false,
    },
  },
);
