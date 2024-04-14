import assert from "assert";
import { forwardRef } from "react";

import { progressBarCva, progressBarFillerCva } from "./ProgressBar.styles";
import type { ProgressBarProps } from "./ProgressBar.types";

import { cn } from "@/utils";

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(function (
  { value, raised = false, disabled = false, className, ...props },
  ref,
) {
  assert(value >= 0, "The ProgressBar value must be between 0 and 1");
  assert(value <= 1, "The ProgressBar value must be between 0 and 1");
  return (
    <div
      ref={ref}
      className={cn(progressBarCva({ raised, disabled, className }))}
      {...props}
    >
      <div
        className={cn(progressBarFillerCva({ disabled }))}
        style={{ width: `${value * 100}%` }}
      />
    </div>
  );
});

export default ProgressBar;
