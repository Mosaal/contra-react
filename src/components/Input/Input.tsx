import { forwardRef, useCallback } from "react";

import type { InputProps } from "./Input.types";

import { cn, useCn, useInputId } from "@/utils";

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  {
    id,
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

  const iconClassName = useCn(
    "absolute top-1/2 -translate-y-1/2",
    disabled ? "text-contra-black-300" : "text-contra-black",
    !disabled && (onLeftIconClick || onRightIconClick)
      ? "pointer-events-auto cursor-pointer"
      : "pointer-events-none",
  );
  const inputClassName = useCn(
    "appearance-none py-3 rounded-4 leading-7 font-medium border-0.5 border-contra-black disabled:border-contra-black-300 text-contra-black disabled:text-contra-black-300 placeholder:text-contra-black-700 disabled:placeholder:text-contra-black-300 bg-contra-white disabled:cursor-not-allowed text-5.25",
    leftIcon ? "pl-12.5" : "pl-5.5",
    rightIcon ? "pr-12.5" : "pr-5.5",
  );

  const handleClickIcon = useCallback(
    (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>,
      clickHandler?: () => void,
    ) => {
      if (disabled) return;
      e.preventDefault();
      clickHandler?.();
    },
    [],
  );

  const renderIcon = useCallback(
    (icon: React.ReactNode, position: "left" | "right") => (
      <div
        className={cn(
          iconClassName,
          position === "left" ? "left-4" : "right-4",
        )}
        onClick={(e) =>
          handleClickIcon(
            e,
            position === "left" ? onLeftIconClick : onRightIconClick,
          )
        }
      >
        {icon}
      </div>
    ),
    [iconClassName, onLeftIconClick, onRightIconClick, handleClickIcon],
  );

  return (
    <label htmlFor={inputId}>
      <div className="inline-flex relative">
        {leftIcon && renderIcon(leftIcon, "left")}
        <input
          type="text"
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={inputClassName}
          {...props}
        />
        {rightIcon && renderIcon(rightIcon, "right")}
      </div>
    </label>
  );
});

export default Input;
