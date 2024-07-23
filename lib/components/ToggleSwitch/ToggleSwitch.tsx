import { forwardRef } from "react";

import {
  toggleSwitchCva,
  toggleSwitchLabelCva,
  toggleSwitchToggleCva,
  toggleSwitchWrapperCva,
  toggleSwitchToggleDotCva,
} from "./ToggleSwitch.styles";
import type { ToggleSwitchProps } from "./ToggleSwitch.types";

import { useInputId, useInputState } from "@/hooks";

import { cn } from "@/utils";

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  function (
    {
      id,
      raised = false,
      leftLabel,
      rightLabel,
      checked,
      defaultChecked,
      disabled,
      className,
      onChange,
      ...props
    },
    ref,
  ) {
    const inputId = useInputId("toggle", id);
    const [isChecked, setIsChecked] = useInputState({
      value: checked,
      defaultValue: defaultChecked,
      finalValue: false,
      type: "checkbox",
      onChange,
    });

    const renderLabel = (label: string) => {
      return (
        <span className={cn(toggleSwitchLabelCva({ disabled }))}>{label}</span>
      );
    };

    return (
      <label
        htmlFor={inputId}
        className={cn(toggleSwitchWrapperCva({ disabled }))}
      >
        {leftLabel && renderLabel(leftLabel)}
        <div className="contra-relative contra-inline-flex">
          <input
            type="checkbox"
            ref={ref}
            id={inputId}
            checked={isChecked}
            disabled={disabled}
            className={cn(toggleSwitchCva({ raised, className }))}
            onChange={setIsChecked}
            {...props}
          />
          <div
            className={cn(
              toggleSwitchToggleCva({ checked: isChecked, disabled }),
            )}
          >
            <div
              className={cn(
                toggleSwitchToggleDotCva({ checked: isChecked, disabled }),
              )}
            />
          </div>
        </div>
        {rightLabel && renderLabel(rightLabel)}
      </label>
    );
  },
);
