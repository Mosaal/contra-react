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
    "cr-inline-block cr-appearance-none cr-border-0.5 cr-font-extrabold cr-shadow-black-000 disabled:cr-cursor-not-allowed disabled:cr-shadow-black-300",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000",
  ],
  {
    variants: {
      variant: BUTTON_COLORS,
      size: {
        small: "cr-rounded-xs cr-px-3.5 cr-py-2 cr-text-sm cr-leading-4",
        normal: "cr-rounded-md cr-p-3.5 cr-text-xl cr-leading-7",
        large: "cr-rounded-md cr-p-3.5 cr-text-xl cr-leading-7",
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
