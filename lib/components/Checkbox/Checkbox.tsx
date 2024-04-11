import { forwardRef, useCallback } from "react";

import type { CheckboxProps } from "./Checkbox.types";

import { Check } from "@/icons";

import { useInputId, useCn } from "@/utils";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function (
  { id, label, labelPosition = "right", disabled, checked, ...props },
  ref,
) {
  const inputId = useInputId("checkbox", id);

  const labelClassName = useCn(
    "text-4.25 leading-6 font-extrabold",
    disabled ? "text-contra-black-300" : "text-contra-black",
  );
  const wrapperClassName = useCn(
    "inline-flex flex-row items-center gap-x-4",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
  );
  const checkClassName = useCn(
    "w-5 h-5 transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    disabled ? "text-contra-black-300" : "text-contra-black",
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
          type="checkbox"
          ref={ref}
          id={inputId}
          checked={checked}
          disabled={disabled}
          className="appearance-none w-8 h-8 rounded-2 transition border-0.5 border-contra-black disabled:border-contra-black-300 bg-contra-blue-100 checked:bg-contra-yellow disabled:bg-contra-black-200 checked:disabled:bg-contra-yellow-100 cursor-pointer disabled:cursor-not-allowed"
          {...props}
        />
        {checked && <Check className={checkClassName} />}
      </div>
      {label && labelPosition === "right" && renderLabel()}
    </label>
  );
});

export default Checkbox;
