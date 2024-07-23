import { cva } from "class-variance-authority";

export const sliderCva = cva("contra-slider", {
  variants: {
    raised: {
      true: "contra-slider-raised",
    },
    disabled: {
      true: "contra-slider-disabled",
    },
  },
  defaultVariants: {
    raised: false,
    disabled: false,
  },
});
