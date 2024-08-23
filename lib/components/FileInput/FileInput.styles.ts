import { cva } from "class-variance-authority";

export const fileInputCva = cva(
  [
    "cr-w-full cr-cursor-pointer cr-appearance-none cr-overflow-hidden cr-rounded-md cr-border-0.5 cr-border-black-000 cr-bg-white cr-text-xl cr-font-medium cr-leading-7 cr-text-black-000 cr-shadow-black-000 disabled:cr-cursor-not-allowed disabled:cr-border-black-300 disabled:cr-text-black-300 disabled:cr-shadow-black-300",
    "[&::file-selector-button]:cr-appearance-none [&::file-selector-button]:cr-border-none [&::file-selector-button]:cr-bg-yellow-000 [&::file-selector-button]:cr-px-3.5 [&::file-selector-button]:cr-py-3 [&::file-selector-button]:cr-font-[inherit] [&::file-selector-button]:cr-text-xl [&::file-selector-button]:cr-font-semibold [&::file-selector-button]:cr-leading-7 [&::file-selector-button]:cr-text-black-000 [&::file-selector-button]:disabled:cr-bg-yellow-100 [&::file-selector-button]:disabled:cr-text-black-300",
    "cr-outline cr-outline-0.5 cr-outline-offset-1 cr-outline-transparent cr-transition-all focus:cr-outline-pink-000 focus-visible:cr-outline-pink-000",
  ],
  {
    variants: {
      raised: {
        true: "cr-shadow-normal",
        false: "cr-shadow-none",
      },
    },
    defaultVariants: {
      raised: false,
    },
  },
);
