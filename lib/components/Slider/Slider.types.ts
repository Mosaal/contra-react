import type { VariantProps } from "class-variance-authority";

import { sliderCva } from "./Slider.styles";

export type SliderBaseProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
>;

export type SliderVariantProps = VariantProps<typeof sliderCva>;

export interface SliderProps extends SliderBaseProps, SliderVariantProps {
  value?: number;
  defaultValue?: number;
}
