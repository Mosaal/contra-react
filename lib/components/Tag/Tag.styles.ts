import { cva } from "class-variance-authority";

export const tagCva = cva(
  "contra-rounded-11 contra-border-0.5 contra-border-black contra-px-2.5 contra-py-2 contra-text-3 contra-font-extrabold contra-leading-4",
  {
    variants: {
      active: {
        true: "contra-bg-pink-800",
        false: "contra-bg-white",
      },
      raised: {
        true: "contra-shadow-small",
        false: "contra-shadow-none",
      },
    },
    defaultVariants: {
      active: false,
      raised: false,
    },
  },
);
