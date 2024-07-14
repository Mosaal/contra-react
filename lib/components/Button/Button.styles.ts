import { cva } from "class-variance-authority";

export const BUTTON_COLORS = {
  primary:
    "border-contra-black bg-contra-white text-contra-black disabled:border-contra-black-300 disabled:text-contra-black-300",
  secondary:
    "border-contra-black bg-contra-black text-contra-white disabled:border-contra-black-300 disabled:bg-contra-black-300",
  tertiary:
    "border-contra-blue bg-contra-blue text-contra-white disabled:border-contra-blue-800 disabled:bg-contra-blue-800",
  quaternary:
    "border-contra-black bg-contra-yellow text-contra-black disabled:border-contra-black-300 disabled:bg-contra-yellow-100 disabled:text-contra-black-300",
} as const;

export const buttonCva = cva(
  "appearance-none border-0.5 font-extrabold shadow-contra-black transition disabled:cursor-not-allowed disabled:shadow-contra-black-300",
  {
    variants: {
      variant: BUTTON_COLORS,
      size: {
        small: "rounded-3 px-3.5 py-2 text-3 leading-4",
        normal: "rounded-4 px-3.5 py-3.5 text-5.25 leading-7",
        large: "rounded-4 px-3.5 py-3.5 text-5.25 leading-7",
      },
      block: {
        true: "w-full",
      },
      raised: {
        false: "shadow-none",
      },
    },
    compoundVariants: [
      {
        raised: true,
        size: "small",
        className: "shadow-contra-small",
      },
      {
        raised: true,
        size: ["normal", "large"],
        className: "shadow-contra-normal",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "normal",
      block: false,
      raised: false,
    },
  },
);
