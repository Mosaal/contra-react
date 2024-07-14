import { cva } from "class-variance-authority";

export const tagCva = cva(
  "rounded-11 border-0.5 border-contra-black px-2.5 py-2 text-3 font-extrabold leading-4",
  {
    variants: {
      active: {
        true: "bg-contra-pink-800",
        false: "bg-contra-white",
      },
      raised: {
        true: "shadow-contra-small",
        false: "shadow-none",
      },
    },
    defaultVariants: {
      active: false,
      raised: false,
    },
  },
);
