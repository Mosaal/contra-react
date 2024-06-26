import { forwardRef, useCallback } from "react";

import {
  stepperIconCva,
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
    raised = false,
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
        (action === "increment" && typeof max !== "undefined"
          ? Math.min(cValue + 1, max)
          : cValue + 1) ||
          (action === "decrement" && typeof min !== "undefined"
            ? Math.max(cValue - 1, min)
            : cValue - 1),
      );
    },
    [min, max, action, cValue, setCValue],
  );

  const Icon = action === "increment" ? Plus : Minus;
  return (
    <div
      className={cn(stepperContainerCva({ variant, size, raised, className }))}
    >
      <label
        htmlFor={inputId}
        className={cn(stepperLabelCva({ variant, size }))}
      >
        {label || (action === "increment" ? "Add" : "Remove")}
      </label>
      <button
        type="button"
        className={cn(stepperButtonCva({ variant, raised, size }))}
        onClick={handleChange}
      >
        <Icon className={cn(stepperIconCva({ size }))} />
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
