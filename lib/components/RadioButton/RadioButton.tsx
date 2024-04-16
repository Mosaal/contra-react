import { forwardRef, useCallback } from "react";

import {
  radioButtonCva,
  radioButtonDotCva,
  radioButtonLabelCva,
  radioButtonWrapperCva,
} from "./RadioButton.styles";
import type { RadioButtonProps } from "./RadioButton.types";

import { cn, useInputId, useInputState } from "@/utils";

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function (
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
  const inputId = useInputId("radio", id);
  const [isChecked, setIsChecked] = useInputState({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    type: "checkbox",
    onChange,
  });

  const renderLabel = useCallback(
    () => (
      <span className={cn(radioButtonLabelCva({ disabled }))}>{label}</span>
    ),
    [label, disabled],
  );

  return (
    <label
      htmlFor={inputId}
      className={cn(radioButtonWrapperCva({ disabled }))}
    >
      {label && labelPosition === "left" && renderLabel()}
      <div className="relative inline-flex">
        <input
          type="radio"
          ref={ref}
          id={inputId}
          checked={isChecked}
          disabled={disabled}
          className={cn(radioButtonCva({ raised }))}
          onChange={setIsChecked}
          {...props}
        />
        {isChecked && <div className={cn(radioButtonDotCva({ disabled }))} />}
      </div>
      {label && labelPosition === "right" && renderLabel()}
    </label>
  );
});

export default RadioButton;
