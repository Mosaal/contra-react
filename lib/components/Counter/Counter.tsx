import React, { forwardRef } from "react";

import {
  counterIconCva,
  counterLabelCva,
  counterContainerCva,
  counterLeftButtonCva,
  counterRightButtonCva,
} from "./Counter.styles";
import type { CounterProps } from "./Counter.types";

import { Minus, Plus } from "@/icons";

import { useControlledState, useInputId } from "@/hooks";

import { cn } from "@/utils";

const Counter = forwardRef<HTMLInputElement, CounterProps>(function (
  {
    id,
    name,
    min,
    max,
    raised = false,
    size = "normal",
    variant = "normal",
    disabled = false,
    value,
    defaultValue,
    className,
    onChange,
  },
  ref,
) {
  const inputId = useInputId("counter", id);
  const [cValue, setCValue] = useControlledState({
    value,
    defaultValue,
    finalValue: 0,
    onChange,
  });

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (disabled) return;
    setCValue(
      typeof min !== "undefined" ? Math.max(cValue - 1, min) : cValue - 1,
    );
  };

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (disabled) return;
    setCValue(
      typeof max !== "undefined" ? Math.min(cValue + 1, max) : cValue + 1,
    );
  };

  const renderNormalVariant = () => {
    return (
      <React.Fragment>
        <label
          htmlFor={inputId}
          className={cn(counterLabelCva({ variant, size, disabled }))}
        >
          {cValue}
        </label>
        <div className="flex flex-row flex-nowrap items-center">
          <button
            type="button"
            disabled={disabled}
            className={cn(counterLeftButtonCva({ variant, size, raised }))}
            onClick={handleDecrement}
          >
            <Minus className={cn(counterIconCva({ size }))} />
          </button>
          <button
            type="button"
            disabled={disabled}
            className={cn(counterRightButtonCva({ variant, size, raised }))}
            onClick={handleIncrement}
          >
            <Plus className={cn(counterIconCva({ size }))} />
          </button>
        </div>
      </React.Fragment>
    );
  };

  const renderContainedVariant = () => {
    return (
      <React.Fragment>
        <button
          type="button"
          disabled={disabled}
          className={cn(counterLeftButtonCva({ variant, size, raised }))}
          onClick={handleDecrement}
        >
          <Minus className={cn(counterIconCva({ size }))} />
        </button>
        <label
          htmlFor={inputId}
          className={cn(counterLabelCva({ variant, size, disabled }))}
        >
          {cValue}
        </label>
        <button
          type="button"
          disabled={disabled}
          className={cn(counterRightButtonCva({ variant, size, raised }))}
          onClick={handleIncrement}
        >
          <Plus className={cn(counterIconCva({ size }))} />
        </button>
      </React.Fragment>
    );
  };

  return (
    <div
      className={cn(
        counterContainerCva({ variant, size, raised, disabled, className }),
      )}
    >
      {variant === "normal" ? renderNormalVariant() : renderContainedVariant()}
      <input
        hidden
        type="number"
        className="hidden"
        ref={ref}
        name={name}
        id={inputId}
        value={cValue}
        disabled={disabled}
      />
    </div>
  );
});

export default Counter;
