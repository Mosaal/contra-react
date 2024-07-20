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
        rail: cn("slider-rail", classNames?.rail || ""),
        track: cn("slider-track", classNames?.track || ""),
        handle: cn("slider-handle", classNames?.handle || ""),
      }}
      {...props}
    />
  );
});
