import { cva } from "class-variance-authority";

export const sliderCva = cva("slider", {
  variants: {
    raised: {
      true: "slider-raised",
    },
    disabled: {
      true: "slider-disabled",
    },
  },
  defaultVariants: {
    raised: false,
    disabled: false,
  },
});
