import { useCallback } from "react";
import { useControlledState } from "use-controlled-state";

import type { ToggleSwitchProps } from "./ToggleSwitch.types";

import { useInputId, useJoinClassNames } from "@/utils";

export default function ToggleSwitch({
  id,
  leftLabel,
  rightLabel,
  checked,
  disabled,
  onChange,
  ...props
}: ToggleSwitchProps) {
  const inputId = useInputId("toggle", id);
  const [isChecked, setIsChecked] = useControlledState(!!checked, onChange);

  const labelClassName = useJoinClassNames(
    "text-4.25 leading-6 font-extrabold",
    disabled ? "text-contra-black-300" : "text-contra-black",
  );
  const wrapperClassName = useJoinClassNames(
    "inline-flex flex-row items-center gap-x-4",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
  );
  const toggleClassName = useJoinClassNames(
    "w-9 h-9 rounded-full transition-[left] border-0.5 bg-contra-white flex items-center justify-center absolute top-0",
    disabled ? "border-contra-black-300" : "border-contra-black",
    isChecked ? "left-6" : "left-0",
  );
  const dotClassName = useJoinClassNames(
    "w-4 h-4 rounded-full border-0.5 bg-transparent",
    disabled ? "border-contra-black-300" : "border-contra-black",
  );

  const renderLabel = useCallback(
    (label: string) => <span className={labelClassName}>{label}</span>,
    [labelClassName],
  );

  return (
    <label htmlFor={inputId} className={wrapperClassName}>
      {leftLabel && renderLabel(leftLabel)}
      <div className="inline-flex relative">
        <input
          type="checkbox"
          id={inputId}
          disabled={disabled}
          checked={isChecked}
          className="appearance-none w-15 h-9 rounded-13 transition border-0.5 border-contra-black disabled:border-contra-black-300 bg-contra-blue-100 checked:bg-contra-yellow disabled:bg-contra-black-200 checked:disabled:bg-contra-yellow-100 cursor-pointer disabled:cursor-not-allowed"
          onChange={(e) => setIsChecked(e.target.checked)}
          {...props}
        />
        <div className={toggleClassName}>
          <div className={dotClassName} />
        </div>
      </div>
      {rightLabel && renderLabel(rightLabel)}
    </label>
  );
}
