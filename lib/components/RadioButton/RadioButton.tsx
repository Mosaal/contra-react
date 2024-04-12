import { forwardRef, useCallback } from "react";

import {
  radioButtonCva,
  radioButtonDotCva,
  radioButtonLabelCva,
  radioButtonWrapperCva,
} from "./RadioButton.styles";
import type { RadioButtonProps } from "./RadioButton.types";

import { cn, useInputId } from "@/utils";

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function (
  { id, label, labelPosition = "right", disabled, checked, ...props },
  ref,
) {
  const inputId = useInputId("radio", id);

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
          checked={checked}
          disabled={disabled}
          className={cn(radioButtonCva())}
          {...props}
        />
        {checked && <div className={cn(radioButtonDotCva({ disabled }))} />}
      </div>
      {label && labelPosition === "right" && renderLabel()}
    </label>
  );
});

export default RadioButton;
