import { forwardRef, useCallback } from "react";

import {
  checkboxCva,
  checkboxIconCva,
  checkboxLabelCva,
  checkboxWrapperCva,
} from "./Checkbox.styles";
import type { CheckboxProps } from "./Checkbox.types";

import { Check } from "@/icons";

import { cn, useInputId } from "@/utils";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function (
  {
    id,
    label,
    raised = false,
    labelPosition = "right",
    checked,
    disabled,
    ...props
  },
  ref,
) {
  const inputId = useInputId("checkbox", id);

  const renderLabel = useCallback(
    () => <span className={cn(checkboxLabelCva({ disabled }))}>{label}</span>,
    [label, disabled],
  );

  return (
    <label htmlFor={inputId} className={cn(checkboxWrapperCva({ disabled }))}>
      {label && labelPosition === "left" && renderLabel()}
      <div className="relative inline-flex">
        <input
          type="checkbox"
          ref={ref}
          id={inputId}
          checked={checked}
          disabled={disabled}
          className={cn(checkboxCva({ raised }))}
          {...props}
        />
        {checked && <Check className={cn(checkboxIconCva({ disabled }))} />}
      </div>
      {label && labelPosition === "right" && renderLabel()}
    </label>
  );
});

export default Checkbox;
