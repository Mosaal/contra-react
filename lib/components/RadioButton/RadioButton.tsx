import { forwardRef, useCallback } from "react";

import {
  radioButtonCva,
  radioButtonDotCva,
  radioButtonIconCva,
  radioButtonLabelCva,
  radioButtonWrapperCva,
} from "./RadioButton.styles";
import type { RadioButtonProps } from "./RadioButton.types";

import { Check } from "@/icons";

import { useInputId, useInputState } from "@/hooks";

import { cn } from "@/utils";

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function (
  {
    id,
    label,
    raised = false,
    variant = "primary",
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
          className={cn(radioButtonCva({ raised, variant }))}
          onChange={setIsChecked}
          {...props}
        />
        {isChecked && variant === "primary" && (
          <div className={cn(radioButtonDotCva({ disabled }))} />
        )}
        {isChecked && variant === "secondary" && (
          <Check className={cn(radioButtonIconCva())} />
        )}
      </div>
      {label && labelPosition === "right" && renderLabel()}
    </label>
  );
});

export default RadioButton;
