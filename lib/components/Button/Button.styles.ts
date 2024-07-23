import { cva } from "class-variance-authority";

export const BUTTON_COLORS = {
  primary:
    "contra-border-black contra-bg-white contra-text-black disabled:contra-border-black-300 disabled:contra-text-black-300",
  secondary:
    "contra-border-black contra-bg-black contra-text-white disabled:contra-border-black-300 disabled:contra-bg-black-300",
  tertiary:
    "contra-border-blue contra-bg-blue contra-text-white disabled:contra-border-blue-800 disabled:contra-bg-blue-800",
  quaternary:
    "contra-border-black contra-bg-yellow contra-text-black disabled:contra-border-black-300 disabled:contra-bg-yellow-100 disabled:contra-text-black-300",
} as const;

export const buttonCva = cva(
  "contra-outline-0.5 contra-appearance-none contra-border-0.5 contra-font-extrabold contra-shadow-black contra-outline-offset-1 contra-outline-pink contra-transition focus:contra-outline disabled:contra-cursor-not-allowed disabled:contra-shadow-black-300",
  {
    variants: {
      variant: BUTTON_COLORS,
      size: {
        small:
          "contra-rounded-3 contra-px-3.5 contra-py-2 contra-text-3 contra-leading-4",
        normal:
          "contra-rounded-4 contra-px-3.5 contra-py-3.5 contra-text-5.25 contra-leading-7",
        large:
          "contra-rounded-4 contra-px-3.5 contra-py-3.5 contra-text-5.25 contra-leading-7",
      },
      block: {
        true: "contra-w-full",
      },
      raised: {
        false: "contra-shadow-none",
      },
    },
    compoundVariants: [
      {
        raised: true,
        size: "small",
        className: "contra-shadow-small",
      },
      {
        raised: true,
        size: ["normal", "large"],
        className: "contra-shadow-normal",
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
