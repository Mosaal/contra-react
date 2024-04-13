import { forwardRef } from "react";

import type { IndicatorProps } from "./Indicator.types";
import { indicatorCva, indicatorWrapperCva } from "./Indicator.styles";

import { cn } from "@/utils";

const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(function (
  { label, position = "top-right", children, ...props },
  ref,
) {
  return (
    <div ref={ref} className="relative inline-block" {...props}>
      {children}
      <div className={cn(indicatorWrapperCva({ position }))}>
        <div className={cn(indicatorCva({ position }))}>{label}</div>
      </div>
    </div>
  );
});

export default Indicator;
