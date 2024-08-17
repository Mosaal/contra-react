import { forwardRef } from "react";

import { indicatorCva, indicatorWrapperCva } from "./Indicator.styles";
import type { IndicatorProps } from "./Indicator.types";

import { cn } from "@/utils";

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(function (
  {
    label,
    raised = false,
    position = "top-right",
    offsetX = 0,
    offsetY = 0,
    className,
    containerClassName,
    children,
    ...props
  },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn("cr-relative cr-inline-block", containerClassName)}
      {...props}
    >
      {children}
      <div
        className={cn(indicatorWrapperCva({ position }))}
        style={{ transform: `translate(${offsetX}, ${offsetY})` }}
      >
        <div className={cn(indicatorCva({ raised, position, className }))}>
          {label}
        </div>
      </div>
    </div>
  );
});
