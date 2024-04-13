import { forwardRef, useCallback } from "react";

import {
  toggleSwitchCva,
  toggleSwitchLabelCva,
  toggleSwitchToggleCva,
  toggleSwitchWrapperCva,
  toggleSwitchToggleDotCva,
} from "./ToggleSwitch.styles";
import type { ToggleSwitchProps } from "./ToggleSwitch.types";

import { cn, useInputId } from "@/utils";

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(function (
  { id, leftLabel, rightLabel, disabled, checked, ...props },
  ref,
) {
  const inputId = useInputId("toggle", id);

  const renderLabel = useCallback(
    (label: string) => (
      <span className={cn(toggleSwitchLabelCva({ disabled }))}>{label}</span>
    ),
    [disabled],
  );

  return (
    <label
      htmlFor={inputId}
      className={cn(toggleSwitchWrapperCva({ disabled }))}
    >
      {leftLabel && renderLabel(leftLabel)}
      <div className="relative inline-flex">
        <input
          type="checkbox"
          ref={ref}
          id={inputId}
          checked={checked}
          disabled={disabled}
          className={cn(toggleSwitchCva())}
          {...props}
        />
        <div className={cn(toggleSwitchToggleCva({ checked, disabled }))}>
          <div
            className={cn(toggleSwitchToggleDotCva({ checked, disabled }))}
          />
        </div>
      </div>
      {rightLabel && renderLabel(rightLabel)}
    </label>
  );
});

export default ToggleSwitch;
