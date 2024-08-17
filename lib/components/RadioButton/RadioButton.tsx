import { forwardRef } from "react";

import {
  radioButtonCva,
  radioButtonLabelCva,
  radioButtonWrapperCva,
} from "./RadioButton.styles";
import type { RadioButtonProps } from "./RadioButton.types";

import { useInputId } from "@/hooks";

import { cn } from "@/utils";

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  function (
    {
      id,
      label,
      raised = false,
      variant = "primary",
      labelPosition = "right",
      disabled,
      className,
      radioButtonClassName,
      ...props
    },
    ref,
  ) {
    const inputId = useInputId("radio", id);

    const renderLabel = () => {
      return (
        <span className={cn(radioButtonLabelCva({ disabled }))}>{label}</span>
      );
    };

    return (
      <label
        htmlFor={inputId}
        className={cn(radioButtonWrapperCva({ disabled, className }))}
      >
        {label && labelPosition === "left" && renderLabel()}
        <input
          type="radio"
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            radioButtonCva({
              raised,
              variant,
              className: radioButtonClassName,
            }),
          )}
          {...props}
        />
        {label && labelPosition === "right" && renderLabel()}
      </label>
    );
  },
);
