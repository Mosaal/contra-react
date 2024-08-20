import { cva } from "class-variance-authority";

export const BUTTON_COLORS = {
  primary:
    "cr-border-black-000 cr-bg-white cr-text-black-000 disabled:cr-border-black-300 disabled:cr-text-black-300",
  secondary:
    "cr-border-black-000 cr-bg-black-000 cr-text-white disabled:cr-border-black-300 disabled:cr-bg-black-300",
  tertiary:
    "cr-border-blue-000 cr-bg-blue-000 cr-text-white disabled:cr-border-blue-800 disabled:cr-bg-blue-800",
  quaternary:
    "cr-border-black-000 cr-bg-yellow-000 cr-text-black-000 disabled:cr-border-black-300 disabled:cr-bg-yellow-100 disabled:cr-text-black-300",
} as const;

export const buttonCva = cva(
  [
    "cr-shadow-black-000 cr-appearance-none cr-border-0.5 cr-font-extrabold disabled:cr-cursor-not-allowed disabled:cr-shadow-black-300",
    "focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000 cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all",
  ],
  {
    variants: {
      variant: BUTTON_COLORS,
      size: {
        small: "cr-text-sm cr-rounded-xs cr-px-3.5 cr-py-2 cr-leading-4",
        normal: "cr-text-xl cr-rounded-md cr-p-3.5 cr-leading-7",
        large: "cr-text-xl cr-rounded-md cr-p-3.5 cr-leading-7",
      },
      block: {
        true: "cr-w-full",
      },
      raised: {
        false: "cr-shadow-none",
      },
    },
    compoundVariants: [
      {
        raised: true,
        size: "small",
        className: "cr-shadow-small",
      },
      {
        raised: true,
        size: ["normal", "large"],
        className: "cr-shadow-normal",
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
