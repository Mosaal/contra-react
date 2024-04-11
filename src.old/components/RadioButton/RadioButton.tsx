import { forwardRef, useCallback } from "react";

import type { RadioButtonProps } from "./RadioButton.types";

import { useInputId, useCn } from "@/utils";

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function (
  { id, label, labelPosition = "right", disabled, checked, ...props },
  ref,
) {
  const inputId = useInputId("radio", id);

  const labelClassName = useCn(
    "text-4.25 leading-6 font-extrabold",
    disabled ? "text-contra-black-300" : "text-contra-black",
  );
  const wrapperClassName = useCn(
    "inline-flex flex-row items-center gap-x-4",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
  );
  const dotClassName = useCn(
    "w-4 h-4 rounded-full transition border-0.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    disabled
      ? "border-contra-black-300 bg-contra-yellow-100"
      : "border-contra-black bg-contra-yellow",
  );

  const renderLabel = useCallback(
    () => <span className={labelClassName}>{label}</span>,
    [label, labelClassName],
  );

  return (
    <label htmlFor={inputId} className={wrapperClassName}>
      {label && labelPosition === "left" && renderLabel()}
      <div className="inline-flex relative">
        <input
          type="radio"
          ref={ref}
          id={inputId}
          checked={checked}
          disabled={disabled}
          className="appearance-none w-8 h-8 rounded-full transition border-0.5 border-contra-black disabled:border-contra-black-300 bg-contra-blue-100 checked:bg-contra-white disabled:bg-contra-black-200 cursor-pointer disabled:cursor-not-allowed"
          {...props}
        />
        {checked && <div className={dotClassName} />}
      </div>
      {label && labelPosition === "right" && renderLabel()}
    </label>
  );
});

export default RadioButton;
