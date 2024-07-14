import RCSlider from "rc-slider";
import "rc-slider/assets/index.css";

import { handleStyle, railStyle, trackStyle } from "./Slider.styles";
import type { SliderProps } from "./Slider.types";

export default function Slider({
  raised = false,
  disabled,
  ...props
}: SliderProps) {
  return (
    <RCSlider
      disabled={disabled}
      dotStyle={{ display: "none" }}
      activeDotStyle={{ display: "none" }}
      style={{ backgroundColor: "transparent" }}
      styles={{
        track: trackStyle(disabled),
        rail: railStyle(raised, disabled),
        handle: handleStyle(disabled),
      }}
      {...props}
    />
  );
}
