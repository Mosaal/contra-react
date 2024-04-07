import { forwardRef, useState } from "react";

import type { StepperProps } from "./Stepper.types";

import { Plus, Minus } from "@/icons";

import { useCn, useInputId } from "@/utils";

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
    onDecrement?.(value + 1);
  };

  const renderInsideSingle = () => {
    return (
      <label
        htmlFor={inputId}
        className="flex flex-row items-center rounded-4 border-0.5 border-contra-black overflow-hidden"
      >
        <span className="py-2 pl-5.5 pr-3.5 text-6 leading-7 font-extrabold text-contra-black bg-contra-yellow">
          {label || "Add"}
        </span>
        <button
          className="py-2.5 pl-2 pr-2.25 bg-contra-white"
          onClick={handleIncrement}
        >
          <Plus strokeWidth={4} className="w-6 h-6" />
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
        className="flex flex-row items-center rounded-4 border-0.5 border-contra-black overflow-hidden"
      >
        <button
          className="py-2.5 pr-2 pl-2.25 bg-contra-white"
          onClick={handleDecrement}
        >
          <Minus strokeWidth={4} className="w-6 h-6" />
        </button>
        <span className="py-2 w-12 text-6 leading-7 font-extrabold text-center text-contra-black bg-contra-yellow">
          {label || value}
        </span>
        <button
          className="py-2.5 pl-2 pr-2.25 bg-contra-white"
          onClick={handleIncrement}
        >
          <Plus strokeWidth={4} className="w-6 h-6" />
        </button>
      </label>
    );
  };

  const renderOutsideSingle = () => {
    return (
      <label htmlFor={inputId} className="flex flex-row items-center gap-x-3">
        <span className="text-9 leading-10 font-extrabold text-contra-black">
          {label || "Add"}
        </span>
        <button
          className="appearance-none w-12 h-12 rounded-4 border-0.5 border-contra-black text-contra-black bg-contra-yellow flex items-center justify-center"
          onClick={direction === "positive" ? handleIncrement : handleDecrement}
        >
          {(direction === "positive" && (
            <Plus strokeWidth={4} className="w-6 h-6" />
          )) ||
            (direction === "negative" && (
              <Minus strokeWidth={4} className="w-6 h-6" />
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
        <span className="text-9 leading-10 font-extrabold text-contra-black">
          {label || value}
        </span>
        <div className="flex flex-row items-center">
          <button
            className="appearance-none w-12 h-12 rounded-l-4 border-l-0.5 border-r-0.25 border-y-0.5 border-contra-black text-contra-black bg-contra-yellow flex items-center justify-center"
            onClick={handleDecrement}
          >
            <Minus strokeWidth={4} className="w-6 h-6" />
          </button>
          <button
            className="appearance-none w-12 h-12 rounded-r-4 border-r-0.5 border-l-0.25 border-y-0.5 border-contra-black text-contra-black bg-contra-yellow flex items-center justify-center"
            onClick={handleIncrement}
          >
            <Plus strokeWidth={4} className="w-6 h-6" />
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
