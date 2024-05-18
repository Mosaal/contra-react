import RCSlider from "rc-slider";

export type SliderBaseProps = Omit<
  React.ComponentProps<typeof RCSlider>,
  "dots" | "dotStyle" | "activeDotStyle" | "marks" | "vertical"
>;

export interface SliderProps extends SliderBaseProps {
  raised?: boolean;
}
