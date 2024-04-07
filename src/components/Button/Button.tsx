import { forwardRef, useCallback, useState } from "react";

import type { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

import { useCn } from "@/utils";

const BUTTON_SHADOWS: Record<ButtonSize, string> = {
  small: "shadow-contra-button-small",
  normal: "shadow-contra-button-normal",
  large: "shadow-contra-button-normal",
};

const BUTTON_SIZES: Record<ButtonSize, string> = {
  small: "px-3.5 py-2 rounded-3 text-3 leading-4",
  normal: "px-3.5 py-3.5 rounded-4 text-5.25 leading-7",
  large: "px-3.5 py-3.5 rounded-4 text-5.25 leading-7",
};

export const BUTTON_COLORS: Record<ButtonVariant, string> = {
  primary:
    "border-contra-black text-contra-black bg-contra-white disabled:border-contra-black-300 disabled:text-contra-black-300",
  secondary:
    "border-contra-black text-contra-white bg-contra-black disabled:border-contra-black-300 disabled:bg-contra-black-300",
  tertiary:
    "border-contra-blue text-contra-white bg-contra-blue disabled:border-contra-blue-800 disabled:bg-contra-blue-800",
  quaternary:
    "border-contra-black text-contra-black bg-contra-yellow disabled:border-contra-black-300 disabled:text-contra-black-300 disabled:bg-contra-yellow-100",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  {
    block = false,
    raised = false,
    size = "normal",
    variant = "primary",
    leftIcon = null,
    rightIcon = null,
    className,
    onMouseUp,
    onMouseDown,
    children,
    ...props
  },
  ref,
) {
  const [isRaised, setIsRaised] = useState<boolean>(!!raised);

  const buttonClassName = useCn(
    "border-0.5 shadow-contra-black disabled:shadow-contra-black-300 appearance-none font-extrabold transition disabled:cursor-not-allowed",
    BUTTON_SIZES[size],
    BUTTON_COLORS[variant],
    isRaised ? BUTTON_SHADOWS[size] : "shadow-none",
    block && "w-full",
    className,
  );

  const handleMouseUp = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (raised) setIsRaised(true);
      onMouseUp?.(e);
    },
    [raised, onMouseUp],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (raised) setIsRaised(false);
      onMouseDown?.(e);
    },
    [raised, onMouseDown],
  );

  return (
    <button
      ref={ref}
      className={buttonClassName}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      {...props}
    >
      <div className="flex flex-row items-center justify-center gap-1.5">
        {leftIcon}
        {children}
        {rightIcon}
      </div>
    </button>
  );
});

export default Button;
