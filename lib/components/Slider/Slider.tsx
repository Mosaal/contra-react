import { forwardRef, useEffect } from "react";

import { sliderCva } from "./Slider.styles";
import type { SliderProps } from "./Slider.types";

import { useInputId, useInputState } from "@/hooks";

import { cn } from "@/utils";

import "./index.css";

const Slider = forwardRef<HTMLInputElement, SliderProps>(function (
  {
    id,
    raised = false,
    max,
    value,
    defaultValue,
    disabled,
    onChange,
    className,
    ...props
  },
  ref,
) {
  const inputId = useInputId("slider", id);
  const [cValue, setCValue] = useInputState({
    value,
    defaultValue,
    finalValue: 0,
    onChange,
  });

  useEffect(() => {
    const slider = document.getElementById(inputId) as HTMLInputElement;
    const progress = (cValue / (max ? Number(max) : 100)) * 100;
    slider.style.setProperty("--tw-gradient-from-position", `${progress}%`);
    slider.style.setProperty("--tw-gradient-to-position", `${progress}%`);
  }, [cValue, max, inputId]);

  return (
    <input
      type="range"
      ref={ref}
      id={inputId}
      value={cValue}
      disabled={disabled}
      className={cn("contra-slider", sliderCva({ raised, className }))}
      onChange={setCValue}
      {...props}
    />
  );
});

export default Slider;
