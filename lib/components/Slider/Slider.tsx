import { forwardRef } from "react";

import RCSlider, { SliderRef } from "rc-slider";
import "rc-slider/assets/index.css";

import { sliderCva } from "./Slider.styles";
import type { SliderProps } from "./Slider.types";

import { cn } from "@/utils";

export const Slider = forwardRef<SliderRef, SliderProps>(function (
  { raised = false, disabled, className, classNames, ...props },
  ref,
) {
  return (
    <RCSlider
      ref={ref}
      disabled={disabled}
      className={cn(sliderCva({ raised, disabled, className }))}
      classNames={{
        ...classNames,
        rail: cn("cr-slider-rail", classNames?.rail || ""),
        track: cn("cr-slider-track", classNames?.track || ""),
        handle: cn("cr-slider-handle", classNames?.handle || ""),
      }}
      {...props}
    />
  );
});
Slider.displayName = "Slider";
