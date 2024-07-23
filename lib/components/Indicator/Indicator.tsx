import { forwardRef } from "react";

import { indicatorCva, indicatorWrapperCva } from "./Indicator.styles";
import type { IndicatorProps } from "./Indicator.types";

import { cn } from "@/utils";

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(function (
  {
    label,
    raised = false,
    position = "top-right",
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <div ref={ref} className="contra-relative contra-inline-block" {...props}>
      {children}
      <div className={cn(indicatorWrapperCva({ position }))}>
        <div className={cn(indicatorCva({ raised, position, className }))}>
          {label}
        </div>
      </div>
    </div>
  );
});
