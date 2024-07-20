import { forwardRef } from "react";

import RCSlider, { SliderRef } from "rc-slider";
import "rc-slider/assets/index.css";

import { handleStyle, railStyle, trackStyle } from "./Slider.styles";
import type { SliderProps } from "./Slider.types";

// @TODO: redo with class based styles
export const Slider = forwardRef<SliderRef, SliderProps>(function (
  { raised = false, disabled, ...props },
  ref,
) {
  return (
    <RCSlider
      ref={ref}
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
});
