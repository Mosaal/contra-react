import { forwardRef } from "react";

import { progressBarCva, progressBarValueCva } from "./ProgressBar.styles";
import type { ProgressBarProps } from "./ProgressBar.types";

import { cn } from "@/utils";

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  function ({ value = 0, raised = false, disabled, className, ...props }, ref) {
    const clampedValue = Math.min(1, Math.max(0, value));
    return (
      <div
        ref={ref}
        className={cn(progressBarCva({ raised, disabled, className }))}
        {...props}
      >
        <div
          className={cn(progressBarValueCva({ disabled }))}
          style={{ width: `${clampedValue * 100}%` }}
        />
      </div>
    );
  },
);
ProgressBar.displayName = "ProgressBar";
