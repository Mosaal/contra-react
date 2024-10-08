import { forwardRef } from "react";

import {
  checkboxCva,
  checkboxLabelCva,
  checkboxWrapperCva,
} from "./Checkbox.styles";
import type { CheckboxProps } from "./Checkbox.types";

import { useInputId } from "@/hooks";

import { cn } from "@/utils";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function (
  {
    id,
    label,
    raised = false,
    variant = "primary",
    labelPosition = "right",
    disabled,
    className,
    checkboxClassName,
    ...props
  },
  ref,
) {
  const inputId = useInputId("checkbox", id);

  const renderLabel = () => {
    return <span className={cn(checkboxLabelCva({ disabled }))}>{label}</span>;
  };

  return (
    <label
      htmlFor={inputId}
      className={cn(checkboxWrapperCva({ disabled, className }))}
    >
      {label && labelPosition === "left" && renderLabel()}
      <input
        type="checkbox"
        ref={ref}
        id={inputId}
        disabled={disabled}
        className={cn(
          checkboxCva({ raised, variant, className: checkboxClassName }),
        )}
        {...props}
      />
      {label && labelPosition === "right" && renderLabel()}
    </label>
  );
});
Checkbox.displayName = "Checkbox";
