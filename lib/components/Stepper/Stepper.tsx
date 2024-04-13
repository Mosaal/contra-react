import { forwardRef, useCallback, useState } from "react";

import type { StepperProps } from "./Stepper.types";

import { Plus, Minus } from "@/icons";

import { cn, useInputId } from "@/utils";

const Stepper = forwardRef<HTMLInputElement, StepperProps>(function (
  {
    id,
    name,
    label,
    variant = "single",
    // steps = "single",
    // type = "outside",
    // direction = "positive",
    onDecrement,
    onIncrement,
    ...props
  },
  ref,
) {
  const inputId = useInputId("stepper", id);
  // @TODO: should be controlled state
  const [value, setValue] = useState<number>(0);

  const handleDecrement = useCallback(() => {
    setValue(value - 1);
    onDecrement?.(value - 1);
  }, [value, onDecrement]);

  const handleIncrement = useCallback(() => {
    setValue(value + 1);
    onIncrement?.(value + 1);
  }, [value, onIncrement]);

  const renderInput = useCallback(
    () => (
      <input
        hidden
        type="number"
        className="hidden"
        ref={ref}
        name={name}
        id={inputId}
        value={value}
      />
    ),
    [inputId, name, ref, value],
  );

  return variant === "single" ? (
    <StepperSingle id={inputId} label={label} {...props}>
      {renderInput()}
    </StepperSingle>
  ) : (
    <StepperDouble id={inputId} label={label || value.toString()} {...props}>
      {renderInput()}
    </StepperDouble>
  );
});

interface StepperSingleProps
  extends Omit<
    React.PropsWithChildren<StepperProps>,
    "variant" | "onDecrement" | "onIncrement"
  > {
  onChange?: (value: number) => void;
}

function StepperSingle({ id, label, container, children }: StepperSingleProps) {
  const renderInsideContainer = () => {
    return (
      <div className="flex flex-row items-center overflow-hidden rounded-4 border-0.5 border-contra-black text-contra-black">
        <label
          htmlFor={id}
          className="bg-contra-yellow py-2 pl-5.5 pr-3.5 text-6 font-extrabold leading-7"
        >
          {label || "Add"}
        </label>
        <button
          type="button"
          className="bg-contra-white py-2.5 pl-2 pr-2.5"
          // onClick={handleIncrement}
        >
          <Plus strokeWidth={4} className="h-6 w-6" />
        </button>
        {children}
      </div>
    );
  };

  const renderOutsideContainer = () => {
    return (
      <div className="flex flex-row items-center gap-x-3 text-contra-black">
        <label htmlFor={id} className="text-9 font-extrabold leading-10">
          {label || "Add"}
        </label>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-4 border-0.5 border-contra-black bg-contra-yellow"
          // onClick={handleIncrement}
        >
          <Plus strokeWidth={4} className="h-6 w-6" />
        </button>
        {children}
      </div>
    );
  };

  return container === "inside"
    ? renderInsideContainer()
    : renderOutsideContainer();
}

interface StepperDoubleProps
  extends Omit<
    React.PropsWithChildren<StepperProps>,
    "variant" | "onDecrement" | "onIncrement"
  > {
  onChange?: (value: number) => void;
}

function StepperDouble({ id, label, container, children }: StepperDoubleProps) {
  const renderInsideContainer = () => {
    return (
      <div className="flex flex-row items-center overflow-hidden rounded-4 border-0.5 border-contra-black text-contra-black">
        <button
          type="button"
          className="bg-contra-white py-2.5 pl-2.5 pr-2"
          // onClick={handleDecrement}
        >
          <Minus strokeWidth={4} className="h-6 w-6" />
        </button>
        <label
          htmlFor={id}
          className="inline-flex min-w-12 items-center justify-center self-stretch bg-contra-yellow text-6 font-extrabold leading-7"
        >
          {label}
        </label>
        <button
          type="button"
          className="bg-contra-white py-2.5 pl-2 pr-2.5"
          // onClick={handleIncrement}
        >
          <Plus strokeWidth={4} className="h-6 w-6" />
        </button>
        {children}
      </div>
    );
  };

  const renderOutsideContainer = () => {
    return (
      <div className="flex flex-row items-center gap-x-3 text-contra-black">
        <label htmlFor={id} className="text-9 font-extrabold leading-10">
          {label}
        </label>
        <div className="flex flex-row flex-nowrap items-center overflow-hidden">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-l-4 border-y-0.5 border-l-0.5 border-r-0.25 border-contra-black bg-contra-yellow"
            // onClick={handleDecrement}
          >
            <Minus strokeWidth={4} className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-r-4 border-y-0.5 border-l-0.25 border-r-0.5 border-contra-black bg-contra-yellow"
            // onClick={handleIncrement}
          >
            <Plus strokeWidth={4} className="h-6 w-6" />
          </button>
        </div>
        {children}
      </div>
    );
  };

  return container === "inside"
    ? renderInsideContainer()
    : renderOutsideContainer();
}

export default Stepper;
