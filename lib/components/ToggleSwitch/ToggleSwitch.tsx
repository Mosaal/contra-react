import { forwardRef } from "react";

import {
  toggleSwitchCva,
  toggleSwitchLabelCva,
  toggleSwitchWrapperCva,
} from "./ToggleSwitch.styles";
import type { ToggleSwitchProps } from "./ToggleSwitch.types";

import { useInputId } from "@/hooks";

import { cn } from "@/utils";

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  function (
    {
      id,
      raised = false,
      leftLabel,
      rightLabel,
      disabled,
      className,
      toggleSwitchClassName,
      ...props
    },
    ref,
  ) {
    const inputId = useInputId("toggle", id);

    const renderLabel = (label: string) => {
      return (
        <span className={cn(toggleSwitchLabelCva({ disabled }))}>{label}</span>
      );
    };

    return (
      <label
        htmlFor={inputId}
        className={cn(toggleSwitchWrapperCva({ disabled, className }))}
      >
        {leftLabel && renderLabel(leftLabel)}
        <input
          type="checkbox"
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            toggleSwitchCva({ raised, className: toggleSwitchClassName }),
          )}
          {...props}
        />
        {rightLabel && renderLabel(rightLabel)}
      </label>
    );
  },
);
