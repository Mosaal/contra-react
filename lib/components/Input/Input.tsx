import { forwardRef, useCallback } from "react";

import { inputCva, inputIconCva } from "./Input.styles";
import type { InputProps } from "./Input.types";

import { useInputId } from "@/hooks";

import { cn } from "@/utils";

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  {
    id,
    raised = false,
    disabled,
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    ...props
  },
  ref,
) {
  const inputId = useInputId("input", id);

  const handleClickIcon = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>,
      clickHandler?: () => void,
    ) => {
      if (disabled) return;
      e.preventDefault();
      clickHandler?.();
    },
    [disabled],
  );

  const renderIcon = useCallback(
    (
      icon: React.ReactNode,
      position: "left" | "right",
      clickHandler?: () => void,
    ) => (
      <div
        className={cn(
          inputIconCva({ disabled, position, clickable: !!clickHandler }),
        )}
        onClick={(e) => handleClickIcon(e, clickHandler)}
      >
        {icon}
      </div>
    ),
    [disabled, handleClickIcon],
  );

  return (
    <label htmlFor={inputId}>
      <div className="relative inline-flex">
        {leftIcon && renderIcon(leftIcon, "left", onLeftIconClick)}
        <input
          type="text"
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            inputCva({ raised }),
            leftIcon ? "pl-12.5" : "pl-5.5",
            rightIcon ? "pr-12.5" : "pr-5.5",
          )}
          {...props}
        />
        {rightIcon && renderIcon(rightIcon, "right", onRightIconClick)}
      </div>
    </label>
  );
});

export default Input;
