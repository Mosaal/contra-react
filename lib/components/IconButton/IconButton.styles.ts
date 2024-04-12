import { cva } from "class-variance-authority";

export const iconButtonCva = cva(
  "appearance-none rounded-full border-0.5 shadow-contra-black transition disabled:cursor-not-allowed disabled:shadow-contra-black-300",
  {
    variants: {
      variant: {
        primary:
          "border-contra-black bg-contra-white text-contra-black disabled:border-contra-black-300 disabled:text-contra-black-300",
        secondary:
          "border-contra-black bg-contra-black text-contra-white disabled:border-contra-black-300 disabled:bg-contra-black-300",
        tertiary:
          "border-contra-blue bg-contra-blue text-contra-white disabled:border-contra-blue-800 disabled:bg-contra-blue-800",
        quaternary:
          "border-contra-black bg-contra-yellow text-contra-black disabled:border-contra-black-300 disabled:bg-contra-yellow-100 disabled:text-contra-black-300",
      },
      size: {
        small: "h-8 w-8",
        normal: "h-12 w-12",
        large: "h-15 w-15",
      },
      raised: {
        false: "shadow-none",
      },
    },
    compoundVariants: [
      {
        raised: true,
        size: ["small", "normal"],
        className: "shadow-contra-button-small",
      },
      {
        raised: true,
        size: "large",
        className: "shadow-contra-button-normal",
      },
    ],
    defaultVariants: {
      size: "normal",
      variant: "primary",
      raised: false,
    },
  },
);
