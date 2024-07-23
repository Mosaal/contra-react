import { forwardRef } from "react";

import {
  checkboxCva,
  checkboxIconCva,
  checkboxLabelCva,
  checkboxWrapperCva,
} from "./Checkbox.styles";
import type { CheckboxProps } from "./Checkbox.types";

import { Check } from "@/icons";

import { useInputId, useInputState } from "@/hooks";

import { cn } from "@/utils";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function (
  {
    id,
    label,
    raised = false,
    variant = "primary",
    labelPosition = "right",
    checked,
    defaultChecked,
    disabled,
    className,
    onChange,
    ...props
  },
  ref,
) {
  const inputId = useInputId("checkbox", id);
  const [isChecked, setIsChecked] = useInputState({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    type: "checkbox",
    onChange,
  });

  const renderLabel = () => {
    return <span className={cn(checkboxLabelCva({ disabled }))}>{label}</span>;
  };

  return (
    <label htmlFor={inputId} className={cn(checkboxWrapperCva({ disabled }))}>
      {label && labelPosition === "left" && renderLabel()}
      <div className="contra-relative contra-inline-flex">
        <input
          type="checkbox"
          ref={ref}
          id={inputId}
          checked={isChecked}
          disabled={disabled}
          className={cn(checkboxCva({ raised, variant, className }))}
          onChange={setIsChecked}
          {...props}
        />
        {isChecked && (
          <Check className={cn(checkboxIconCva({ variant, disabled }))} />
        )}
      </div>
      {label && labelPosition === "right" && renderLabel()}
    </label>
  );
});
