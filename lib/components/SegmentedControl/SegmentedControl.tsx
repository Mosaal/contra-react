import { useState } from "react";

import {
  segmentedControlCva,
  segmentedControlOptionCva,
} from "./SegmentedControl.styles";
import type { SegmentedControlProps } from "./SegmentedControl.types";

import { cn } from "@/utils";

export default function SegmentedControl({
  block = false,
  raised = false,
  disabled = false,
  options,
  className,
  ...props
}: SegmentedControlProps) {
  const [value, setValue] = useState<string>(""); // @TODO: controlled state, if no initial value is given select the first by default
  return (
    <div
      className={cn(
        segmentedControlCva({ block, raised, disabled, className }),
      )}
      {...props}
    >
      {options.map((option, index) => (
        <button
          key={`option#${index}`}
          type="button"
          value={option.value}
          disabled={disabled || option.disabled}
          className={cn(
            segmentedControlOptionCva({ selected: value === option.value }),
          )}
          onClick={() => setValue(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
