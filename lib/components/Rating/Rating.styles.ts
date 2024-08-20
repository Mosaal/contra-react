import { cva } from "class-variance-authority";

export const ratingCva = cva("cr-flex cr-flex-row cr-items-center", {
  variants: {
    size: {
      small: "cr-gap-0.5",
      normal: "cr-gap-1.5",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export const ratingLabelCva = cva("cr-font-extrabold", {
  variants: {
    size: {
      small: "cr-text-lg cr-leading-6",
      normal: "cr-text-4xl cr-leading-8",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export const ratingStarCva = cva("cr-transition-colors", {
  variants: {
    size: {
      small: "cr-h-6 cr-w-6",
      normal: "cr-h-8 cr-w-8",
    },
    active: {
      true: "cr-fill-yellow-000",
      false: "cr-fill-white",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});
