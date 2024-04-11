import { forwardRef } from "react";

import type { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(function (
  { value, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className="w-full h-3 rounded-2.5 border-0.5 border-contra-black bg-transparent overflow-hidden"
      {...props}
    >
      <div
        className="h-full transition-[width] bg-contra-yellow"
        style={{ width: `${value * 100}%` }}
      />
    </div>
  );
});

export default ProgressBar;
