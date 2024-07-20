import { forwardRef } from "react";

import { inputCva, inputIconCva } from "./Input.styles";
import type { InputProps } from "./Input.types";

import { useInputId } from "@/hooks";

import { cn } from "@/utils";

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  {
    id,
    raised = false,
    disabled,
    leftIcon,
    rightIcon,
    className,
    onLeftIconClick,
    onRightIconClick,
    ...props
  },
  ref,
) {
  const inputId = useInputId("input", id);

  const handleClickIcon = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    clickHandler?: () => void,
  ) => {
    e.preventDefault();
    if (disabled) return;
    clickHandler?.();
  };

  const renderIcon = (
    icon: React.ReactNode,
    position: "left" | "right",
    clickHandler?: () => void,
  ) => {
    return (
      <div
        className={cn(
          inputIconCva({ disabled, position, clickable: !!clickHandler }),
        )}
        onClick={(e) => handleClickIcon(e, clickHandler)}
      >
        {icon}
      </div>
    );
  };

  return (
    <label htmlFor={inputId} className="inline-block w-85">
      <div className="relative inline-flex w-full">
        {leftIcon && renderIcon(leftIcon, "left", onLeftIconClick)}
        <input
          type="text"
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            inputCva({ raised, className }),
            leftIcon ? "pl-12.5" : "pl-3.5",
            rightIcon ? "pr-12.5" : "pr-3.5",
          )}
          {...props}
        />
        {rightIcon && renderIcon(rightIcon, "right", onRightIconClick)}
      </div>
    </label>
  );
});
