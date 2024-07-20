import { forwardRef } from "react";

import { progressBarCva } from "./ProgressBar.styles";
import type { ProgressBarProps } from "./ProgressBar.types";

import { cn } from "@/utils";

export const ProgressBar = forwardRef<HTMLProgressElement, ProgressBarProps>(
  function ({ raised = false, disabled, className, ...props }, ref) {
    return (
      <progress
        ref={ref}
        className={cn(progressBarCva({ raised, disabled, className }))}
        {...props}
      />
    );
  },
);
