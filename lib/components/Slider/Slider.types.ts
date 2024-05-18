import { SliderProps as RCSliderProps } from "rc-slider";

export type SliderBaseProps = Omit<
  RCSliderProps,
  "dots" | "dotStyle" | "activeDotStyle" | "marks" | "vertical"
>;

export interface SliderProps extends SliderBaseProps {
  raised?: boolean;
}
