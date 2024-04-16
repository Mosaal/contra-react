import { forwardRef, useCallback } from "react";

import {
  checkboxCva,
  checkboxIconCva,
  checkboxLabelCva,
  checkboxWrapperCva,
} from "./Checkbox.styles";
import type { CheckboxProps } from "./Checkbox.types";

import { Check } from "@/icons";

import { cn, useInputId, useInputState } from "@/utils";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function (
  {
    id,
    label,
    raised = false,
    labelPosition = "right",
    checked,
    defaultChecked,
    disabled,
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
          checked={isChecked}
          disabled={disabled}
          className={cn(checkboxCva({ raised }))}
          onChange={setIsChecked}
          {...props}
        />
        {isChecked && <Check className={cn(checkboxIconCva({ disabled }))} />}
      </div>
      {label && labelPosition === "right" && renderLabel()}
    </label>
  );
});

export default Checkbox;
