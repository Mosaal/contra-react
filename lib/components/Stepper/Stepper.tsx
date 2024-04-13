import { forwardRef, useState } from "react";

import type { StepperProps } from "./Stepper.types";

import { Plus, Minus } from "@/icons";

import { cn, useInputId } from "@/utils";

const Stepper = forwardRef<HTMLInputElement, StepperProps>(function (
  {
    id,
    name,
    label,
    size = "normal",
    steps = "single",
    type = "outside",
    direction = "positive",
    onDecrement,
    onIncrement,
    ...props
  },
  // ref,
) {
  const inputId = useInputId("stepper", id);
  const [value, setValue] = useState<number>(0);
  // const Component = variant === "outside" ? StepperOutside : StepperInside;

  const handleDecrement = () => {
    setValue(value - 1);
    onDecrement?.(value - 1);
  };

  const handleIncrement = () => {
    setValue(value + 1);
    onIncrement?.(value + 1);
  };

  const renderInsideSingle = () => {
    return (
      <label
        htmlFor={inputId}
        className="flex flex-row items-center overflow-hidden rounded-4 border-0.5 border-contra-black"
      >
        <span className="bg-contra-yellow py-2 pl-5.5 pr-3.5 text-6 font-extrabold leading-7 text-contra-black">
          {label || "Add"}
        </span>
        <button
          className="bg-contra-white py-2.5 pl-2 pr-2.25"
          onClick={handleIncrement}
        >
          <Plus strokeWidth={4} className="h-6 w-6" />
        </button>
        <input
          hidden
          type="number"
          id={inputId}
          name={name}
          value={value}
          {...props}
        />
      </label>
    );
  };

  const renderInsideDouble = () => {
    return (
      <label
        htmlFor={inputId}
        className="flex flex-row items-center overflow-hidden rounded-4 border-0.5 border-contra-black"
      >
        <button
          className="bg-contra-white py-2.5 pl-2.25 pr-2"
          onClick={handleDecrement}
        >
          <Minus strokeWidth={4} className="h-6 w-6" />
        </button>
        <span className="w-12 bg-contra-yellow py-2 text-center text-6 font-extrabold leading-7 text-contra-black">
          {label || value}
        </span>
        <button
          className="bg-contra-white py-2.5 pl-2 pr-2.25"
          onClick={handleIncrement}
        >
          <Plus strokeWidth={4} className="h-6 w-6" />
        </button>
      </label>
    );
  };

  const renderOutsideSingle = () => {
    return (
      <label htmlFor={inputId} className="flex flex-row items-center gap-x-3">
        <span
          className={cn(
            "font-extrabold text-contra-black",
            size === "small" ? "text-6 leading-7" : "text-9 leading-10",
          )}
        >
          {label || "Add"}
        </span>
        <button
          className={cn(
            "flex appearance-none items-center justify-center border-0.5 border-contra-black bg-contra-yellow text-contra-black",
            size === "small" ? "h-9 w-9 rounded-3" : "h-12 w-12 rounded-4",
          )}
          onClick={direction === "positive" ? handleIncrement : handleDecrement}
        >
          {(direction === "positive" && (
            <Plus
              strokeWidth={4}
              className={size === "small" ? "h-4 w-4" : "h-6 w-6"}
            />
          )) ||
            (direction === "negative" && (
              <Minus
                strokeWidth={4}
                className={size === "small" ? "h-4 w-4" : "h-6 w-6"}
              />
            ))}
        </button>
        <input
          hidden
          type="number"
          id={inputId}
          name={name}
          value={value}
          {...props}
        />
      </label>
    );
  };

  const renderOutsideDouble = () => {
    return (
      <label htmlFor={inputId} className="flex flex-row items-center gap-x-3">
        <span className="text-9 font-extrabold leading-10 text-contra-black">
          {label || value}
        </span>
        <div className="flex flex-row items-center">
          <button
            className="flex h-12 w-12 appearance-none items-center justify-center rounded-l-4 border-y-0.5 border-l-0.5 border-r-0.25 border-contra-black bg-contra-yellow text-contra-black"
            onClick={handleDecrement}
          >
            <Minus strokeWidth={4} className="h-6 w-6" />
          </button>
          <button
            className="flex h-12 w-12 appearance-none items-center justify-center rounded-r-4 border-y-0.5 border-l-0.25 border-r-0.5 border-contra-black bg-contra-yellow text-contra-black"
            onClick={handleIncrement}
          >
            <Plus strokeWidth={4} className="h-6 w-6" />
          </button>
        </div>
        <input
          hidden
          type="number"
          id={inputId}
          name={name}
          value={value}
          {...props}
        />
      </label>
    );
  };

  if (type === "outside")
    return steps === "single" ? renderOutsideSingle() : renderOutsideDouble();
  return steps === "single" ? renderInsideSingle() : renderInsideDouble();
});

// function StepperInside({
//   id,
//   label,
//   size,
//   className,
//   ...props
// }: Omit<StepperProps, "variant">) {}

// function StepperOutside({
//   id,
//   label,
//   size,
//   className,
//   ...props
// }: Omit<StepperProps, "variant">) {}

export default Stepper;
