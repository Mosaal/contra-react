import RCSlider from "rc-slider";
import type { VariantProps } from "class-variance-authority";

import type { sliderCva } from "./Slider.styles";

export type SliderBaseProps = Omit<
  React.ComponentProps<typeof RCSlider>,
  "dots" | "dotStyle" | "activeDotStyle" | "marks" | "vertical"
>;

export type SliderVariantProps = Omit<
  VariantProps<typeof sliderCva>,
  "disabled"
>;

export interface SliderProps extends SliderBaseProps, SliderVariantProps {}
