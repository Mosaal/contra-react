import React, { forwardRef, useCallback } from "react";

import {
  counterIconCva,
  counterLabelCva,
  counterContainerCva,
  counterLeftButtonCva,
  counterRightButtonCva,
} from "./Counter.styles";
import { CounterProps } from "./Counter.types";

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

  const handleDecrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setCValue(
        typeof min !== "undefined" ? Math.max(cValue - 1, min) : cValue - 1,
      );
    },
    [min, cValue, setCValue],
  );

  const handleIncrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setCValue(
        typeof max !== "undefined" ? Math.min(cValue + 1, max) : cValue + 1,
      );
    },
    [max, cValue, setCValue],
  );

  const renderNormalVariant = useCallback(
    () => (
      <React.Fragment>
        <label
          htmlFor={inputId}
          className={cn(counterLabelCva({ variant, size }))}
        >
          {cValue}
        </label>
        <div className="flex flex-row flex-nowrap items-center">
          <button
            type="button"
            className={cn(counterLeftButtonCva({ variant, size, raised }))}
            onClick={handleDecrement}
          >
            <Minus className={cn(counterIconCva({ size }))} />
          </button>
          <button
            type="button"
            className={cn(counterRightButtonCva({ variant, size, raised }))}
            onClick={handleIncrement}
          >
            <Plus className={cn(counterIconCva({ size }))} />
          </button>
        </div>
      </React.Fragment>
    ),
    [inputId, variant, size, raised, cValue, handleDecrement, handleIncrement],
  );

  const renderContainedVariant = useCallback(
    () => (
      <React.Fragment>
        <button
          type="button"
          className={cn(counterLeftButtonCva({ variant, size, raised }))}
          onClick={handleDecrement}
        >
          <Minus className={cn(counterIconCva({ size }))} />
        </button>
        <label
          htmlFor={inputId}
          className={cn(counterLabelCva({ variant, size }))}
        >
          {cValue}
        </label>
        <button
          type="button"
          className={cn(counterRightButtonCva({ variant, size, raised }))}
          onClick={handleIncrement}
        >
          <Plus className={cn(counterIconCva({ size }))} />
        </button>
      </React.Fragment>
    ),
    [inputId, variant, size, raised, cValue, handleDecrement, handleIncrement],
  );

  return (
    <div
      className={cn(counterContainerCva({ variant, size, raised, className }))}
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
      />
    </div>
  );
});

export default Counter;
