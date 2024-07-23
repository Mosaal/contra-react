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
    <label htmlFor={inputId} className="contra-inline-block contra-w-85">
      <div className="contra-relative contra-inline-flex contra-w-full">
        {leftIcon && renderIcon(leftIcon, "left", onLeftIconClick)}
        <input
          type="text"
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            inputCva({ raised, className }),
            leftIcon ? "contra-pl-12.5" : "contra-pl-3.5",
            rightIcon ? "contra-pr-12.5" : "contra-pr-3.5",
          )}
          {...props}
        />
        {rightIcon && renderIcon(rightIcon, "right", onRightIconClick)}
      </div>
    </label>
  );
});
