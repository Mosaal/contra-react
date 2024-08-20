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
    inputClassName,
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
    <label
      htmlFor={inputId}
      className={cn("cr-inline-block cr-w-85 cr-max-w-full", className)}
    >
      <div className="cr-relative cr-inline-flex cr-w-full">
        {leftIcon && renderIcon(leftIcon, "left", onLeftIconClick)}
        <input
          type="text"
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            inputCva({ raised, className: inputClassName }),
            leftIcon ? "cr-pl-12.5" : "cr-pl-3.5",
            rightIcon ? "cr-pr-12.5" : "cr-pr-3.5",
          )}
          {...props}
        />
        {rightIcon && renderIcon(rightIcon, "right", onRightIconClick)}
      </div>
    </label>
  );
});
