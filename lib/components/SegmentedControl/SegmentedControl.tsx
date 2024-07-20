import { forwardRef } from "react";

import {
  segmentedControlCva,
  segmentedControlOptionCva,
} from "./SegmentedControl.styles";
import type { SegmentedControlProps } from "./SegmentedControl.types";

import { useControlledState } from "@/hooks";

import { cn } from "@/utils";

export const SegmentedControl = forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(function (
  {
    value,
    defaultValue,
    block = false,
    raised = false,
    disabled,
    options,
    className,
    onChange,
    ...props
  },
  ref,
) {
  const [cValue, setCValue] = useControlledState({
    value,
    defaultValue,
    finalValue: options?.[0].value ?? "",
    onChange,
  });

  return (
    <div
      ref={ref}
      className={cn(
        segmentedControlCva({ block, raised, disabled, className }),
      )}
      {...props}
    >
      {options.map((option, index) => (
        <button
          key={`segmented-control-option#${index}`}
          type="button"
          value={option.value}
          disabled={disabled || option.disabled}
          className={cn(
            segmentedControlOptionCva({ selected: cValue === option.value }),
          )}
          onClick={() => setCValue(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
});
