import { forwardRef } from "react";

import { indicatorCva, indicatorWrapperCva } from "./Indicator.styles";
import type { IndicatorProps } from "./Indicator.types";

import { cn } from "@/utils";

const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(function (
  { label, raised = false, position = "top-right", children, ...props },
  ref,
) {
  return (
    <div ref={ref} className="relative inline-block" {...props}>
      {children}
      <div className={cn(indicatorWrapperCva({ position }))}>
        <div className={cn(indicatorCva({ raised, position }))}>{label}</div>
      </div>
    </div>
  );
});

export default Indicator;
