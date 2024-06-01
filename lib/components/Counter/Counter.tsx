import React, { forwardRef, useCallback } from "react";

import { counterContainerCva } from "./Counter.styles";
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
      setCValue(min ? Math.max(cValue - 1, min) : cValue - 1);
    },
    [min, cValue, setCValue],
  );

  const handleIncrement = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setCValue(max ? Math.min(cValue + 1, max) : cValue + 1);
    },
    [max, cValue, setCValue],
  );

  const renderNormalVariant = useCallback(
    () => (
      <React.Fragment>
        <label htmlFor={inputId} className="text-9 font-extrabold leading-10">
          {cValue}
        </label>
        <div className="flex flex-row flex-nowrap items-center overflow-hidden">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-l-4 border-y-0.5 border-l-0.5 border-r-0.25 border-contra-black bg-contra-yellow"
            onClick={handleDecrement}
          >
            <Minus strokeWidth={4} className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-r-4 border-y-0.5 border-l-0.25 border-r-0.5 border-contra-black bg-contra-yellow"
            onClick={handleIncrement}
          >
            <Plus strokeWidth={4} className="h-6 w-6" />
          </button>
        </div>
      </React.Fragment>
    ),
    [inputId, cValue, handleDecrement, handleIncrement],
  );

  const renderContainedVariant = useCallback(
    () => (
      <React.Fragment>
        <button
          type="button"
          className="bg-contra-white py-2.5 pl-2.5 pr-2"
          onClick={handleDecrement}
        >
          <Minus strokeWidth={4} className="h-6 w-6" />
        </button>
        <label
          htmlFor={inputId}
          className="inline-flex min-w-12 items-center justify-center self-stretch bg-contra-yellow text-6 font-extrabold leading-7"
        >
          {cValue}
        </label>
        <button
          type="button"
          className="bg-contra-white py-2.5 pl-2 pr-2.5"
          onClick={handleIncrement}
        >
          <Plus strokeWidth={4} className="h-6 w-6" />
        </button>
      </React.Fragment>
    ),
    [inputId, cValue, handleDecrement, handleIncrement],
  );

  return (
    <div className={cn(counterContainerCva({ variant, size, className }))}>
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
