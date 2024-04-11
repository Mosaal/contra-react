import { cva } from "class-variance-authority";

export const btnCva = cva(
  "appearance-none font-extrabold transition border-0.5 shadow-contra-black disabled:shadow-contra-black-300 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "border-contra-black text-contra-black bg-contra-white disabled:border-contra-black-300 disabled:text-contra-black-300",
        secondary:
          "border-contra-black text-contra-white bg-contra-black disabled:border-contra-black-300 disabled:bg-contra-black-300",
        tertiary:
          "border-contra-blue text-contra-white bg-contra-blue disabled:border-contra-blue-800 disabled:bg-contra-blue-800",
        quaternary:
          "border-contra-black text-contra-black bg-contra-yellow disabled:border-contra-black-300 disabled:text-contra-black-300 disabled:bg-contra-yellow-100",
      },
      size: {
        small: "px-3.5 py-2 rounded-3 text-3 leading-4",
        normal: "px-3.5 py-3.5 rounded-4 text-5.25 leading-7",
        large: "px-3.5 py-3.5 rounded-4 text-5.25 leading-7",
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
        className: "shadow-contra-button-small",
      },
      {
        raised: true,
        size: ["normal", "large"],
        className: "shadow-contra-button-normal",
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
