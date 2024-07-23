import { cva } from "class-variance-authority";

export const sliderCva = cva("cr-slider", {
  variants: {
    raised: {
      true: "cr-slider-raised",
    },
    disabled: {
      true: "cr-slider-disabled",
    },
  },
  defaultVariants: {
    raised: false,
    disabled: false,
  },
});
