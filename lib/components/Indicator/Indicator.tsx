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
    children,
    ...props
  },
  ref,
) {
  return (
    <div ref={ref} className="cr-relative cr-inline-block cr-w-full" {...props}>
      {children}
      <div className="cr-absolute cr-bottom-auto cr-top-0 cr-h-4 cr-min-w-4 cr-rounded-7.5 cr-bg-red cr-px-1 cr-text-3 cr-font-bold cr-leading-4 cr-text-white">
        {label}
      </div>
      {/* <div
        className={cn(indicatorWrapperCva({ position }))}
        style={{ transform: `translate(${offsetX}, ${offsetY})` }}
      >
        <div className={cn(indicatorCva({ raised, position, className }))}>
          {label}
        </div>
      </div> */}
    </div>
  );
});
