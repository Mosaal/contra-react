import { forwardRef, useCallback } from "react";

import {
  stepperLabelCva,
  stepperButtonCva,
  stepperContainerCva,
} from "./Stepper.styles";
import { StepperProps } from "./Stepper.types";

import { Plus, Minus } from "@/icons";

import { useControlledState, useInputId } from "@/hooks";

import { cn } from "@/utils";

const Stepper = forwardRef<HTMLInputElement, StepperProps>(function (
  {
    id,
    name,
    label,
    min,
    max,
    size = "normal",
    variant = "normal",
    action = "increment",
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

  const handleChange = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setCValue(
        (action === "increment" && max
          ? Math.min(cValue + 1, max)
          : cValue + 1) ||
          (action === "decrement" && min
            ? Math.max(cValue - 1, min)
            : cValue - 1),
      );
    },
    [min, max, action, cValue, setCValue],
  );

  const Icon = action === "increment" ? Plus : Minus;
  return (
    <div className={cn(stepperContainerCva({ variant, size, className }))}>
      <label
        htmlFor={inputId}
        className={cn(stepperLabelCva({ variant, size }))}
      >
        {label || (action === "increment" ? "Add" : "Remove")}
      </label>
      <button
        type="button"
        className={cn(stepperButtonCva({ variant, size }))}
        onClick={handleChange}
      >
        <Icon
          strokeWidth={4}
          className={size === "normal" ? "h-6 w-6" : "h-4.5 w-4.5"}
        />
      </button>
      <input
        hidden
        type="number"
        className="hidden"
        ref={ref}
        name={name}
        id={inputId}
        value={cValue}
      />
    </div>
  );
});

export default Stepper;
