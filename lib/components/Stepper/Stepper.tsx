import { forwardRef } from "react";

import {
  stepperIconCva,
  stepperLabelCva,
  stepperButtonCva,
  stepperContainerCva,
} from "./Stepper.styles";
import type { StepperProps } from "./Stepper.types";

import { Plus, Minus } from "@/icons";

import { useControlledState, useInputId } from "@/hooks";

import { cn } from "@/utils";

export const Stepper = forwardRef<HTMLInputElement, StepperProps>(function (
  {
    id,
    name,
    label,
    min,
    max,
    raised = false,
    size = "normal",
    variant = "normal",
    action = "increment",
    disabled,
    value,
    defaultValue,
    className,
    onChange,
  },
  ref,
) {
  const inputId = useInputId("stepper", id);
  const [cValue, setCValue] = useControlledState({
    value,
    defaultValue,
    finalValue: 0,
    onChange,
  });

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (disabled) return;
    if (action === "increment") {
      setCValue(
        typeof max !== "undefined" ? Math.min(cValue + 1, max) : cValue + 1,
      );
    } else if (action === "decrement") {
      setCValue(
        typeof min !== "undefined" ? Math.max(cValue - 1, min) : cValue - 1,
      );
    }
  };

  const Icon = action === "increment" ? Plus : Minus;
  return (
    <div
      className={cn(
        stepperContainerCva({ variant, size, raised, disabled, className }),
      )}
    >
      <label
        htmlFor={inputId}
        className={cn(stepperLabelCva({ variant, size, disabled }))}
      >
        {label || (action === "increment" ? "Add" : "Remove")}
      </label>
      <button
        type="button"
        disabled={disabled}
        className={cn(stepperButtonCva({ variant, raised, size }))}
        onClick={handleChange}
      >
        <Icon className={cn(stepperIconCva({ size }))} />
      </button>
      <input
        hidden
        type="number"
        className="contra-hidden"
        ref={ref}
        name={name}
        id={inputId}
        value={cValue}
        disabled={disabled}
      />
    </div>
  );
});
